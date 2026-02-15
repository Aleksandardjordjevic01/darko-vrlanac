import { Phone, FileText, Users } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

const steps = [
  {
    num: "01",
    title: "Pozovite Nas",
    description: "Pozovite nas u bilo koje doba dana ili noći. Dostupni smo 24/7/365 za vas.",
    icon: Phone,
  },
  {
    num: "02",
    title: "Dokumentacija",
    description: "Za sve ostalo, uključujući dokumentaciju, brinemo se mi. Bez brige sa vaše strane.",
    icon: FileText,
  },
  {
    num: "03",
    title: "Mi Preuzimamo",
    description: "Od tog trenutka mi preuzimamo kompletnu organizaciju sahrane — svaki detalj.",
    icon: Users,
  },
];

const Process = () => {
  const ref = useScrollFade();

  return (
    <section id="process" className="py-24 md:py-32 bg-secondary" ref={ref}>
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-center mb-16">
          Šta raditi u slučaju smrti?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group bg-card p-10 rounded-2xl shadow-sm hover:shadow-xl hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-default"
            >
              <span className="text-4xl font-serif font-bold text-muted-foreground group-hover:text-primary-foreground/60 transition-colors duration-500">
                {step.num}
              </span>
              <step.icon className="w-8 h-8 mt-6 mb-4 text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-500" />
              <h3 className="text-xl font-serif font-semibold mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/70 transition-colors duration-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
