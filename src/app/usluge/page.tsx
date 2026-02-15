import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function UslugePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader title="Naše Usluge" subtitle="Kompletna podrška sa pažnjom prema svakom detalju" />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
