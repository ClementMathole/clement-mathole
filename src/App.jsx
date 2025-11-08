import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import TechMarquee from "./modules/TechMarquee";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                  <Home />
                <hr />
                <TechMarquee />
                <hr />
                <Services />
                <hr />
                
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
