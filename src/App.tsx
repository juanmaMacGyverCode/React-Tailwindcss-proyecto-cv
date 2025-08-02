import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

/* Páginas */
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ScheduleMeeting from './pages/ScheduleMeeting';

/* Componentes */
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact-me" element={<Contact />} />
          <Route path="schedule-a-meeting" element={<ScheduleMeeting />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
