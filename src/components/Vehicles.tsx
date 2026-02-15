'use client';

import Image from "next/image";
import vehicleEclass from "@/assets/vehicle-eclass.jpg";
import vehicleSprinter from "@/assets/vehicle-sprinter.jpg";
import { useScrollFade } from "@/hooks/useScrollFade";

const vehicles = [
  {
    image: vehicleEclass,
    name: "Mercedes-Benz E-Class",
    description: "Luksuzno pogrebno vozilo sa klimatizacijom i reprezentativnim enterij erom.",
    badge: "Premium",
  },
  {
    image: vehicleSprinter,
    name: "Mercedes-Benz Sprinter",
    description: "Specijalno vozilo za međunarodni prevoz sa svom potrebnom dokumentacijom.",
    badge: "Međunarodni",
  },
];

const Vehicles = () => {
  const ref = useScrollFade();

  return (
    <section id="vehicles" className="py-24 md:py-32 bg-secondary" ref={ref}>
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-center mb-4">
          Naša Vozila
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Flota Mercedes-Benz vozila za dostojanstven prevoz
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {vehicles.map((v) => (
            <div
              key={v.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative overflow-hidden h-64">
                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary text-primary-foreground rounded-full z-10">
                  {v.badge}
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif font-semibold mb-2">{v.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vehicles;
