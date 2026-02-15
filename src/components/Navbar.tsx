import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Početna", href: "#hero" },
  { label: "O nama", href: "#process" },
  { label: "Usluge", href: "#services" },
  { label: "Vozila", href: "#vehicles" },
  { label: "Galerija", href: "#stats" },
  { label: "Kontakt", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 rounded-2xl ${
        scrolled
          ? "glass shadow-lg shadow-black/5"
          : "glass-dark shadow-xl shadow-black/20"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#hero" className="font-serif text-xl font-bold tracking-wide">
          <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>
            Vječno
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70 ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className={`hidden md:inline-flex px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
            scrolled
              ? "bg-primary text-primary-foreground hover:bg-gray-800"
              : "bg-primary-foreground text-primary hover:bg-gray-100"
          }`}
        >
          Zakažite Poziv
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className={`inline-flex justify-center px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
              scrolled
                ? "bg-primary text-primary-foreground"
                : "bg-primary-foreground text-primary"
            }`}
          >
            Zakažite Poziv
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
