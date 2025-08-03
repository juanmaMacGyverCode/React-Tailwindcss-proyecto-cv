/*import backgroundImage from '../assets/images/backgrounds/background-landscape.avif';*/
/*import backgroundImage from '../assets/images/backgrounds/wallpaper-vectorial-image.jpg';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Background({ children, className = '' }: Props) {
  return (
    <div
      className={`min-h-screen bg-cover bg-center bg-fixed ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}*/

// src/components/Background.tsx

import React from 'react';

interface BackgroundProps {
  image: string;
  className?: string;
  children: React.ReactNode;
}

export default function Background({ image, className = '', children }: BackgroundProps) {
  return (
    <div
      className={`bg-fixed bg-cover bg-center w-full ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  );
}
