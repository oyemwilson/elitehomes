import React from 'react';
import { useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from './screens/LandingPage';
import AboutUs from './screens/AboutUs';
import Services from './screens/Services';
import WhyChooseUs from './screens/WhyChooseUs';
import ContactUs from './screens/ContactUs';

import TopNav from './components/Topnav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AOS from "aos";
import "aos/dist/aos.css";
import TermsAndPrivacy from './screens/TandC';



function App() {

useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
}, []);


  return (
    <Router>
      <ScrollToTop />
      <TopNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms-and-condition" element={<TermsAndPrivacy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;