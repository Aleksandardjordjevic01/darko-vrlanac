import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { useScrollFade } from "@/hooks/useScrollFade";
import { useState } from "react";
import { X } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import vehicleEclass from "@/assets/vehicle-eclass.jpg";
import vehicleSprinter from "@/assets/vehicle-sprinter.jpg";

const galleryImages = [
  { src: heroBg, alt: "Pogrebna ceremonija", category: "Ceremonije" },
  { src: vehicleEclass, alt: "Mercedes-Benz E-Class", category: "Vozila" },
  { src: vehicleSprinter, alt: "Mercedes-Benz Sprinter", category: "Vozila" },
  { src: heroBg, alt: "Unutrašnjost kapele", category: "Prostor" },
  { src: vehicleEclass, alt: "Pogrebna pratnja", category: "Ceremonije" },
  { src: vehicleSprinter, alt: "Međunarodni transport", category: "Vozila" },
];

const categories = ["Sve", "Ceremonije", "Vozila", "Prostor"];

const Galerija = () => {
  const ref = useScrollFade();
  const [activeCategory, setActiveCategory] = useState("Sve");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "Sve"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader title="Galerija" subtitle="Pogledajte naš prostor, vozila i dosadašnji rad" />

      <section className="py-24 md:py-32 bg-background" ref={ref}>
        <div className="container max-w-6xl mx-auto px-6">
          {/* Filters */}
          <div className="flex justify-center gap-3 mb-16 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 flex items-end">
                  <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-primary-foreground text-sm font-medium">{img.alt}</p>
                    <p className="text-primary-foreground/60 text-xs">{img.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-primary/90 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-primary-foreground hover:opacity-70 transition-opacity">
            <X size={28} />
          </button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-w-full max-h-[80vh] object-contain rounded-xl"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Galerija;
