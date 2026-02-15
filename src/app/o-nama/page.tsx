import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import { Shield, Heart, Clock, Award } from "lucide-react";

const values = [
  { icon: Shield, title: "Pouzdanost", description: "Više od 25 godina smo sinonim za pouzdanu i profesionalnu organizaciju sahrana." },
  { icon: Heart, title: "Empatija", description: "Pristupamo svakoj porodicicom sa razumevanjem, poštovanjem i brigom u najtežim trenucima." },
  { icon: Clock, title: "Dostupnost", description: "Naš tim je dostupan 24 sata dnevno, 7 dana u nedelji, 365 dana u godini." },
  { icon: Award, title: "Profesionalnost", description: "Svaki detalj organizujemo sa najvišim standardima kvaliteta i pažnje." },
];

export default function ONamaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader title="O Nama" subtitle="Više od 25 godina posvećeni dostojanstvenoj organizaciji sahrana" />

      <section className="py-24 md:py-32 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-8">
            Ko Smo Mi
          </h2>
          <p className="text-muted-foreground leading-relaxed text-center mb-6">
            Pogrebno preduzeće „Vječno" osnovano je sa ciljem da porodicama pruži kompletnu podršku u najtežim trenucima. Sa dugogodišnjim iskustvom i profesionalnim pristupom, postali smo jedan od vodećih pružalaca pogrebnih usluga u regionu.
          </p>
          <p className="text-muted-foreground leading-relaxed text-center">
            Naš tim čine iskusni i empatični profesionalci koji razumeju koliko je važno da svaki detalj bude organizovan besprekorno. Od prvog kontakta do poslednjeg ispraćaja — mi smo uz vas.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-16">
            Naše Vrednosti
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="group text-center p-8 rounded-2xl bg-card shadow-sm hover:shadow-xl hover:bg-primary hover:text-primary-foreground transition-all duration-500"
              >
                <v.icon className="w-8 h-8 mx-auto mb-5 text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-500" />
                <h3 className="text-lg font-serif font-semibold mb-3">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/70 transition-colors duration-500">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Footer />
    </div>
  );
}
