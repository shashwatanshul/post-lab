import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/utils/ScrollToTop";
import "./App.css";

function App() {
  const [lenis, setLenis] = useState(null);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    setLenis(lenisInstance);

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop lenis={lenis} />
      <div className="App">
        <Layout>
          <Routes>
            {/* Redirect root to /about since it's the landing page */}
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/about" replace />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
