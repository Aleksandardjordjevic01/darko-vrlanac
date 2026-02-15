import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { useScrollFade } from "@/hooks/useScrollFade";
import { useState } from "react";
import { Package, Flower2, Star, Shield } from "lucide-react";

const coffins = [
  { name: "Model Klasik", material: "Hrast", description: "Jednostavan i dostojanstven sanduk od hrastovog drveta.", price: "Od 45.000 RSD" },
  { name: "Model Elegant", material: "Orah", description: "Reprezentativan sanduk sa satenskom unutrašnjošću.", price: "Od 75.000 RSD" },
  { name: "Model Premium", material: "Mahagonij", description: "Luksuzni sanduk sa ručno rađenim detaljima i zlatnim ručkama.", price: "Od 120.000 RSD" },
  { name: "Model Krem", material: "Beli hrast", description: "Svetli sanduk sa belom unutrašnjošću, elegantan i miran.", price: "Od 65.000 RSD" },
  { name: "Urna Klasik", material: "Metal", description: "Jednostavna metalna urna za kremaciju.", price: "Od 15.000 RSD" },
  { name: "Urna Premium", material: "Mermer", description: "Mermerna urna sa graviranim detaljima.", price: "Od 35.000 RSD" },
];

const packages = [
  {
    name: "Osnovni Paket",
    icon: Package,
    price: "Od 90.000 RSD",
    features: ["Preuzimanje pokojnika", "Smrtni sanduk — Model Klasik", "Prevoz do groblja", "Osnovna dokumentacija", "Jedna pogrebna pratnja"],
  },
  {
    name: "Standardni Paket",
    icon: Star,
    price: "Od 150.000 RSD",
    features: ["Sve iz Osnovnog paketa", "Sanduk — Model Elegant", "Cvetni aranžman", "Kompletna dokumentacija", "Ozvučenje i muzika", "Objave u novinama"],
    highlighted: true,
  },
  {
    name: "Premium Paket",
    icon: Shield,
    price: "Od 250.000 RSD",
    features: ["Sve iz Standardnog paketa", "Sanduk — Model Premium", "Premium cvetni aranžmani", "Personalizovana ceremonija", "Foto i video dokumentacija", "Lična koordinacija svih detalja"],
  },
];

const equipment = [
  { name: "Cvetni Venac", description: "Ručno rađen venac od svežeg cveća.", price: "Od 5.000 RSD", icon: Flower2 },
  { name: "Buketi i Aranžmani", description: "Cvetni buketi za ceremoniju i ispraćaj.", price: "Od 3.000 RSD", icon: Flower2 },
  { name: "Pogrebna Odeća", description: "Kompletna oprema za pokojnika.", price: "Od 8.000 RSD", icon: Package },
  { name: "Nadgrobni Spomenik", description: "Izrada i postavljanje nadgrobnog spomenika.", price: "Po dogovoru", icon: Package },
];

type Tab = "paketi" | "sanduci" | "oprema";

const Katalog = () => {
  const ref = useScrollFade();
  const [activeTab, setActiveTab] = useState<Tab>("paketi");

  const tabs: { id: Tab; label: string }[] = [
    { id: "paketi", label: "Paketi Usluga" },
    { id: "sanduci", label: "Sandučići i Urne" },
    { id: "oprema", label: "Oprema i Cveće" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader title="Katalog" subtitle="Kompletna ponuda pogrebne opreme, paketa i usluga" />

      <section className="py-24 md:py-32 bg-background" ref={ref}>
        <div className="container max-w-6xl mx-auto px-6">
          {/* Tabs */}
          <div className="flex justify-center gap-3 mb-16 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Paketi */}
          {activeTab === "paketi" && (
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative p-10 rounded-2xl transition-all duration-500 ${
                    pkg.highlighted
                      ? "bg-primary text-primary-foreground shadow-xl scale-[1.02]"
                      : "bg-card border border-border shadow-sm hover:shadow-xl"
                  }`}
                >
                  {pkg.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-medium tracking-wider uppercase bg-primary-foreground text-primary rounded-full">
                      Najpopularniji
                    </span>
                  )}
                  <pkg.icon className={`w-8 h-8 mb-6 ${pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`} />
                  <h3 className="text-xl font-serif font-semibold mb-2">{pkg.name}</h3>
                  <p className={`text-2xl font-serif font-bold mb-6 ${pkg.highlighted ? "" : "text-foreground"}`}>{pkg.price}</p>
                  <ul className="space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className={`text-sm flex items-start gap-2 ${pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-current shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/kontakt"
                    className={`mt-8 block text-center py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                      pkg.highlighted
                        ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    Kontaktirajte Nas
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Sandučići */}
          {activeTab === "sanduci" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coffins.map((item) => (
                <div
                  key={item.name}
                  className="group p-8 rounded-2xl border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500"
                >
                  <h3 className="text-lg font-serif font-semibold mb-1">{item.name}</h3>
                  <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground group-hover:text-primary-foreground/60 transition-colors duration-500 mb-4">
                    {item.material}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/70 transition-colors duration-500 mb-6">
                    {item.description}
                  </p>
                  <p className="text-lg font-serif font-bold">{item.price}</p>
                </div>
              ))}
            </div>
          )}

          {/* Oprema */}
          {activeTab === "oprema" && (
            <div className="grid sm:grid-cols-2 gap-6">
              {equipment.map((item) => (
                <div
                  key={item.name}
                  className="group flex items-start gap-6 p-8 rounded-2xl border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500"
                >
                  <item.icon className="w-7 h-7 shrink-0 mt-1 text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-500" />
                  <div>
                    <h3 className="text-lg font-serif font-semibold mb-1">{item.name}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/70 transition-colors duration-500 mb-3">
                      {item.description}
                    </p>
                    <p className="text-lg font-serif font-bold">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Katalog;
