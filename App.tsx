
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/animations.css';
import { CursorProvider } from './components/CursorProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import VisionMission from './pages/VisionMission';
import ChairmanMessage from './pages/ChairmanMessage';
import Admission from './pages/Admission';
import Courses from './pages/Courses';
import Fees from './pages/Fees';
import AcademicCalendar from './pages/AcademicCalendar';
import Department from './pages/Department';
import Gallery from './pages/Gallery';
import Videos from './pages/Videos';
import Staff from './pages/Staff';
import Students from './pages/Students';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <CursorProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/about/chairman" element={<ChairmanMessage />} />
            <Route path="/academics/admission" element={<Admission />} />
            <Route path="/academics/courses" element={<Courses />} />
            <Route path="/academics/fees" element={<Fees />} />
            <Route path="/academics/calendar" element={<AcademicCalendar />} />
            <Route path="/departments/:slug" element={<Department />} />
            <Route path="/media/gallery" element={<Gallery />} />
            <Route path="/media/videos" element={<Videos />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/students" element={<Students />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CursorProvider>
  );
};

export default App;
