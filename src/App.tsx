import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LocalizedRoutes from './LocalizedRoutes';
import ResumePreview from "./pages/ResumePreview";
/*import CanonicalLink from './components/CanonicalLink';*/


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <Routes>
          {/* Redirige a idioma por defecto si no hay */}
          <Route path="/" element={<Navigate to="/es" replace />} />
          {/* Captura el idioma como parámetro y carga las rutas internas */}
          <Route path="/:lang/*" element={<LocalizedRoutes />} />
          <Route path="/resume" element={<ResumePreview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
