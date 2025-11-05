import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";
import ElectricBorder from "../animation/ElectricalBorder";




const Homepage = () => {
  return (
    <>
    <main className="relative">
      <ParticleBackground/>
      <Header/>
      <Hero />
      <ElectricBorder/>

    </main>
    <Footer/>
    </>
  );
};

export default Homepage;