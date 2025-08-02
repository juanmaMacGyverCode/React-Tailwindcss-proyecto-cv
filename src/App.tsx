import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import ScheduleMeeting from './pages/ScheduleMeeting.tsx';

function App() {
  return (
    <BrowserRouter>
      <nav className="w-screen flex flex-col">
        <div className="w-full bg-indigo-600 text-white p-4 flex justify-center">
          <Link className="mx-3" to="/">Home</Link>
          <Link className="mx-3" to="/about">About</Link>
          <Link className="mx-3" to="/schedule-a-meeting">Schedule a meeting</Link>
          <Link className="mx-3" to="/contact-me">Contact</Link>
        </div>
      </nav>
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
