import { BrowserRouter as Router, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Projectspage from "./pages/Projectspage";
import Hackathonpage from "./pages/Hackathonpage";
import ExperiencePage from "./pages/ExperiencePage";
import CertificatesPage from "./pages/CertificatesPage";
import Contact from "./pages/Contactpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/projects" element={<Projectspage />} />
        <Route path="/hackathon" element={<Hackathonpage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
