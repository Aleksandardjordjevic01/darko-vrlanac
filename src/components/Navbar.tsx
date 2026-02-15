import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Početna", href: "/" },
  { label: "O nama", href: "/o-nama" },
  { label: "Usluge", href: "/usluge" },
  { label: "Vozila", href: "/vozila" },
  { label: "Katalog", href: "/katalog" },
  { label: "Galerija", href: "/galerija" },
  { label: "Kontakt", href: "/kontakt" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On subpages, always use scrolled (light) style
  const isHome = location.pathname === "/";
  const isLight = scrolled || !isHome;

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 rounded-2xl ${
        isLight
          ? "glass shadow-lg shadow-black/5"
          : "glass-dark shadow-xl shadow-black/20"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-serif text-xl font-bold tracking-wide">
          <span className={isLight ? "text-foreground" : "text-primary-foreground"}>
            Vječno
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70 ${
                isLight ? "text-foreground" : "text-primary-foreground"
              } ${location.pathname === item.href ? "opacity-60" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          to="/kontakt"
          className={`hidden md:inline-flex px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
            isLight
              ? "bg-primary text-primary-foreground hover:bg-gray-800"
              : "bg-primary-foreground text-primary hover:bg-gray-100"
          }`}
        >
          Zakažite Poziv
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${isLight ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium ${
                isLight ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            onClick={() => setMobileOpen(false)}
            className={`inline-flex justify-center px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
              isLight
                ? "bg-primary text-primary-foreground"
                : "bg-primary-foreground text-primary"
            }`}
          >
            Zakažite Poziv
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
