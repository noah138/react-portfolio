import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Porfolio from "./components/Portfolio/Portfolio";
import NavBar from "./components/Navigation/NavBar"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Porfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
