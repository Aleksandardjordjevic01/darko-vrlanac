import { Heart, Globe, Flower2, FileCheck, Package } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

const services = [
  {
    icon: Heart,
    title: "Organizacija Sahrana",
    description: "Kompletna organizacija sahrane sa svim potrebnim formalnostima i detalj ima.",
  },
  {
    icon: Globe,
    title: "Međunarodni Prevoz",
    description: "Prevoz pokojnika u sve zemlje Evrope sa potrebnom pratnjom i dokumentima.",
  },
  {
    icon: Flower2,
    title: "Cvetni Aranžmani",
    description: "Profesionalno uređene cvetne aranžmane za svaku priliku i po vašoj želji.",
  },
  {
    icon: FileCheck,
    title: "Dokumentacija",
    description: "Kompletna nabavka potrebne dokumentacije za domaći i međunarodni transport.",
  },
  {
    icon: Package,
    title: "Svi Mrtvački Sandučići",
    description: "Širok izbor smrtnih sanduka — od jednostavnih do reprezentativnih modela.",
  },
];

const Services = () => {
  const ref = useScrollFade();

  return (
    <section id="services" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-center mb-4">
          Naše Usluge
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Pružamo kompletnu podršku sa pažnjom prema svakom detalju.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-2xl border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 cursor-default"
            >
              <s.icon className="w-7 h-7 mb-5 text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-500" />
              <h3 className="text-lg font-serif font-semibold mb-2">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/70 transition-colors duration-500">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
