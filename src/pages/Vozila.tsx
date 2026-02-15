import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Vehicles from "@/components/Vehicles";

const VozilaPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader title="Naša Vozila" subtitle="Flota Mercedes-Benz vozila za dostojanstven prevoz" />
      <Vehicles />
      <Footer />
    </div>
  );
};

export default VozilaPage;
