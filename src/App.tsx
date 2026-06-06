import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ExperienceNav from './components/layout/ExperienceNav';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Liverpool from './pages/Liverpool';
import UkSoftwareCompany from './pages/UkSoftwareCompany';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-background text-primary">
        <ScrollToTop />
        <Navbar />
        <ExperienceNav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/software-solutions-liverpool" element={<Liverpool />} />
            <Route path="/uk-software-development-company" element={<UkSoftwareCompany />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
