import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";





const Homepage = () => {
  return (
    <>
    <main className="relative">
      <ParticleBackground/>
      <Header/>
      <Hero />


    </main>
    <Footer/>
    </>
  );
};

export default Homepage;