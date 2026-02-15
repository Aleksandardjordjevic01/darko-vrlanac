import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const KontaktPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader title="Kontakt" subtitle="Dostupni smo 24/7 — javite nam se u bilo koje vreme" />
      <Contact />
      <Footer />
    </div>
  );
};

export default KontaktPage;
