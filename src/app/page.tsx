import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Vehicles from "@/components/Vehicles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Process />
      <Services />
      <Stats />
      <Vehicles />
      <Footer />
    </div>
  );
}
