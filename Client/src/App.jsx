import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Projectspage from "./pages/Projectspage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projectspage />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/skill" element={<Skill />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
