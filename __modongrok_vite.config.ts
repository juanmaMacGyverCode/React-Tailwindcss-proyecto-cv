/// <reference types="vitest/config" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  // Lee variables de .env / .env.local
  const env = loadEnv(mode, process.cwd(), '');

  // Debe existir en tu .env: VITE_NGROK_URL=https://xxxxx.ngrok-free.app
  const NGROK_URL = env.VITE_NGROK_URL || '';
  const NGROK_HOST = NGROK_URL ? new URL(NGROK_URL).host : undefined;

  return {
    plugins: [tailwindcss(), react()],
    server: {
      host: true,              // 0.0.0.0
      port: 5173,
      strictPort: true,
      origin: NGROK_URL || undefined,                     // URLs absolutas correctas detrás del túnel
      allowedHosts: NGROK_HOST ? [NGROK_HOST] : true,     // permite ngrok (o todos si no hay env)
      hmr: NGROK_HOST
        ? { host: NGROK_HOST, protocol: 'wss', clientPort: 443 } // HMR por wss
        : undefined,
    },
    test: {
      projects: [{
        extends: true,
        plugins: [storybookTest({ configDir: path.join(dirname, '.storybook') })],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{ browser: 'chromium' }]
          },
          setupFiles: ['.storybook/vitest.setup.ts']
        }
      }]
    }
  };
});
