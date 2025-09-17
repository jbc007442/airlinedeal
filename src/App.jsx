import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Disclaimer from "./pages/Disclaimer";
import Baggage_Policy from "./pages/Baggage_Policy";
import Advisory_Disclosure from "./pages/Advisory_Disclosure";
import Cookie_Policy from "./pages/Cookie_Policy";
import Tc from "./pages/Tc";
import GDRP from "./pages/GDRP";
import Privacy_Policy from "./pages/Privacy_Policy";
import Taxes_Fees from "./pages/Taxes_Fees";
import Price_Match_Promise from "./pages/Price_Match_Promise";
import Post_Ticketing_Fee from "./pages/Post_Ticketing_Fee";
import Damage_Management_policy from "./pages/Damage_Management_policy";
import Service from "./pages/Service";
import California_Consumer_Privacy_Act from "./pages/California_Consumer_Privacy_Act";
import Cancel_Policy from "./pages/Cancel_Policy";


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/faqs" element={<Faqs/>} />
            <Route path="/disclaimer" element={<Disclaimer/>} />
            <Route path="/baggage-policy" element={<Baggage_Policy/>} />
            <Route path="/Advisory" element={<Advisory_Disclosure/>} />
            <Route path="/cookie-policy" element={<Cookie_Policy/>} />
            <Route path="/t&c" element={<Tc/>} />
            <Route path="/gdpr" element={<GDRP/>} />
            <Route path="/privacy" element={<Privacy_Policy/>} />
            <Route path="/taxes-fees" element={<Taxes_Fees/>} />
            <Route path="/price-match" element={<Price_Match_Promise/>} />
            <Route path="/post-ticketing-fee" element={<Post_Ticketing_Fee/>} />
            <Route path="/damage-policy" element={<Damage_Management_policy/>} />
            <Route path="/service-fees" element={<Service/>} />
            <Route path="/ccpa" element={<California_Consumer_Privacy_Act/>} />
            <Route path="/cancel-policy" element={<Cancel_Policy/>} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
