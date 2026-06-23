import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ExperienceNav from './components/layout/ExperienceNav';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Industries = lazy(() => import('./pages/Industries'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Liverpool = lazy(() => import('./pages/Liverpool'));
const UkSoftwareCompany = lazy(() => import('./pages/UkSoftwareCompany'));
const UkSoftwareCompaniesBlog = lazy(() => import('./pages/blog/UkSoftwareCompanies'));
const FailingBusinessSolutionsBlog = lazy(() => import('./pages/blog/FailingBusinessSolutions'));
const InfonixSolutionsUkBlog = lazy(() => import('./pages/blog/InfonixSolutionsUk'));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-background text-primary">
        <ScrollToTop />
        <Navbar />
        <ExperienceNav />
        <main className="flex-grow">
          <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/uk-software-companies-guide" element={<UkSoftwareCompaniesBlog />} />
              <Route path="/blog/failing-business-solutions" element={<FailingBusinessSolutionsBlog />} />
              <Route path="/blog/infonix-solutions-uk" element={<InfonixSolutionsUkBlog />} />
              <Route path="/software-solutions-liverpool" element={<Liverpool />} />
              <Route path="/uk-software-development-company" element={<UkSoftwareCompany />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
