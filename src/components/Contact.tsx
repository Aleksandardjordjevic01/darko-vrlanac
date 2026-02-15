import { Phone, MapPin, Mail } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";
import { useState } from "react";

const contactCards = [
  {
    icon: Phone,
    title: "Telefon 24/7",
    line1: "+381 64 123 4567",
    line2: "Uvek dostupni za vas",
  },
  {
    icon: MapPin,
    title: "Adresa",
    line1: "Bulevarsk, Srbija",
    line2: "Centar grada",
  },
  {
    icon: Mail,
    title: "Email",
    line1: "info@vjecno.rs",
    line2: "Odgovaramo u roku od 1h",
  },
];

const Contact = () => {
  const ref = useScrollFade();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-center mb-16">
          Kontaktirajte Nas
        </h2>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {contactCards.map((c) => (
            <div
              key={c.title}
              className="text-center p-8 rounded-2xl border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 group"
            >
              <c.icon className="w-7 h-7 mx-auto mb-4 text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-500" />
              <h3 className="font-serif font-semibold mb-2">{c.title}</h3>
              <p className="text-sm font-medium">{c.line1}</p>
              <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/60 transition-colors duration-500">
                {c.line2}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Vaše Ime"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-border bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefon"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-border bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Adresa"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-border bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
            />
            <textarea
              name="message"
              placeholder="Vaša Poruka"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-border bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground font-medium text-sm tracking-wide rounded-xl hover:bg-primary-foreground hover:text-primary border border-primary transition-all duration-300"
            >
              Pošaljite Poruku
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
