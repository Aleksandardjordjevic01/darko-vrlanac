import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Vehicles from "@/components/Vehicles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Process />
      <Services />
      <Stats />
      <Vehicles />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
