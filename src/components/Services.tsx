'use client';

import Image from "next/image";
import { useScrollFade } from "@/hooks/useScrollFade";

const services = [
  {
    title: "Organizacija Sahrana",
    description: "Kompletna organizacija sahrane sa svim potrebnim formalnostima i detaljima.",
    image: "/images/hero-bg.jpg", // Zameniti sa pravom slikom ceremonije
    badge: "24/7 Dostupno",
    spanClass: "lg:col-span-4",
  },
  {
    title: "Međunarodni Prevoz",
    description: "Prevoz pokojnika u sve zemlje Evrope sa potrebnom pratnjom i dokumentima.",
    image: "/images/vehicle-sprinter.jpg",
    badge: "EU Sertifikat",
    spanClass: "lg:col-span-5",
  },
  {
    title: "Cvetni Aranžmani",
    description: "Profesionalno uređeni cvetni aranžmani za svaku priliku i po vašoj želji.",
    image: "/images/hero-bg.jpg", // Zameniti sa slikom cveća
    badge: "Svež Cvet",
    spanClass: "lg:col-span-3",
  },
  {
    title: "Kompletna Dokumentacija",
    description: "Nabavka svih potrebnih dokumenata za domaći i međunarodni transport pokojnika.",
    image: "/images/hero-bg.jpg", // Zameniti sa slikom dokumentacije
    badge: "Brza Obrada",
    spanClass: "lg:col-span-7",
  },
  {
    title: "Smrtni Sandučići",
    description: "Širok izbor kvalitetnih sanduka — od jednostavnih do najreprezentativnijih modela.",
    image: "/images/vehicle-eclass.jpg", // Zameniti sa slikom sanduka
    badge: "Premium Materijal",
    spanClass: "lg:col-span-5",
  },
];

const Services = () => {
  const ref = useScrollFade();

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary" ref={ref}>
      <div className="container max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-center mb-4">
          Naše Usluge
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Pružamo kompletnu podršku sa pažnjom prema svakom detalju u najtežim trenucima.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-border hover:border-primary ${service.spanClass}`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Badge */}
                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-primary text-primary-foreground rounded-full shadow-lg">
                  {service.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
