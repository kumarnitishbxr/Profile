import Hero from "../components/Hero";
import About from "../components/About";

import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";




const Home = () => {
  return (
    <>
    <main className="relative">
      <ParticleBackground/>
      <Header/>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer/>
    </>
  );
};

export default Home;