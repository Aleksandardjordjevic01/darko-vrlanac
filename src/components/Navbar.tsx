'use client';

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LanguageSelect } from "@/components/LanguageSelect";

const navItems = [
  { label: "Početna", href: "/" },
  { label: "O nama", href: "/o-nama" },
  { label: "Usluge", href: "/usluge" },
  { label: "Vozila", href: "/vozila" },
  { label: "Katalog", href: "/katalog" },
  { label: "Galerija", href: "/galerija" },
  { label: "Kontakt", href: "/kontakt" },
];

const languages = [
  { label: "Srpski", value: "sr" },
  { label: "English", value: "en" },
  { label: "Deutsch", value: "de" },
  { label: "Français", value: "fr" },
  { label: "Italiano", value: "it" },
  { label: "Русский", value: "ru" },
  { label: "中文", value: "zh" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState("sr");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On subpages, always use scrolled (light) style
  const isHome = pathname === "/";
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
        <Link href="/" className="relative h-8 w-32">
          <Image
            src={isLight ? "/images/logo-dark.png" : "/images/logo-white.png"}
            alt="Vječno Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70 ${
                isLight ? "text-foreground" : "text-primary-foreground"
              } ${pathname === item.href ? "opacity-60" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <LanguageSelect 
          value={language} 
          onValueChange={setLanguage}
          languages={languages}
          isLight={isLight}
          className="hidden md:flex"
        />

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
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium ${
                isLight ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          <LanguageSelect 
            value={language} 
            onValueChange={setLanguage}
            languages={languages}
            isLight={isLight}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
