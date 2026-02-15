import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    type: "Radnja 1",
    name: "Prodajno Mesto Centar",
    address: "Bulevar Kralja Aleksandra 123, Beograd",
    phone: "+381 64 123 4567",
    hours: "Pon-Pet: 08:00 - 20:00, Sub: 09:00 - 17:00",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.564803814447!2d20.457273976704695!3d44.81239737106867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab1a9b0c2c7%3A0x9e76c5d4e4e5e5e5!2sBulevar%20Kralja%20Aleksandra%2C%20Beograd!5e0!3m2!1sen!2srs!4v1707977200000!5m2!1sen!2srs"
  },
  {
    type: "Radnja 2",
    name: "Prodajno Mesto Novi Beograd",
    address: "Jurija Gagarina 45, Novi Beograd",
    phone: "+381 64 123 4568",
    hours: "Pon-Pet: 08:00 - 20:00, Sub: 09:00 - 17:00",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.8326584891797!2d20.41351931571442!3d44.82008597909854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7067d54b5c93%3A0x3a24c4e6e5e5e5e5!2sJurija%20Gagarina%2C%20Beograd!5e0!3m2!1sen!2srs!4v1707977300000!5m2!1sen!2srs"
  },
  {
    type: "Proizvodnja",
    name: "Proizvodna Hala",
    address: "Industrijska zona bb, Pančevo",
    phone: "+381 64 123 4569",
    hours: "Pon-Pet: 07:00 - 15:00 (samo za poslovne klijente)",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.9854218766786!2d20.636977915715!3d44.86978397909663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6f5e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2zUGFuxI1ldm8!5e0!3m2!1sen!2srs!4v1707977400000!5m2!1sen!2srs"
  }
];

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader title="Kontakt" subtitle="Dostupni smo 24/7 — javite nam se u bilo koje vreme" />
      <Contact />
      
      {/* Lokacije */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-4">
            Naše Lokacije
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Posetite nas u jednoj od naših prodajnih mesta ili nas kontaktirajte za kućnu posetu
          </p>
          
          <div className="space-y-12">
            {locations.map((location, index) => (
              <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Info */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-primary text-primary-foreground rounded-full mb-4 w-fit">
                      {location.type}
                    </span>
                    <h3 className="text-2xl font-serif font-semibold mb-6">{location.name}</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-1">Adresa</p>
                          <p className="text-foreground">{location.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-1">Telefon</p>
                          <a href={`tel:${location.phone}`} className="text-foreground hover:text-primary transition-colors">
                            {location.phone}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-1">Radno vreme</p>
                          <p className="text-foreground">{location.hours}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Map */}
                  <div className="h-[300px] md:h-full min-h-[400px]">
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Mapa - ${location.name}`}
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
