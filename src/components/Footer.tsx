const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Vječno</h3>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Ako već morate da birate, izaberite najbolje. Profesionalna organizacija sahrana.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-primary-foreground/40">
              Navigacija
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Početna", "O nama", "Usluge", "Vozila", "Galerija", "Kontakt"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-primary-foreground/40">
              Usluge
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Organizacija sahrana", "Međunarodni prevoz", "Smrtni sandučići", "Cvetni aranžmani"].map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-primary-foreground/40">
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>+381 64 123 4567</li>
              <li>Bulevarsk, Srbija</li>
              <li>Dostupni 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            © 2026 Vječno Pogrebne Usluge. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
