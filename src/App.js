import "./App.css";
import Yoga from "./components/Yoga";
import Home from "./components/Home";
import About from "./components/About";
import Classes from "./components/Classes";
import Pricing from "./components/Pricing";
import ContactUs from "./components/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/About" element={<About />} />
        <Route path="/Yoga" element={<Yoga />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
