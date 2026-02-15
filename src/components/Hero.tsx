import Link from "next/link";
import Image from "next/image";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Funeral home"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/50 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-semibold leading-tight tracking-tight text-primary-foreground fade-in">
          Dostojanstvena i profesionalna organizacija sahrana
        </h1>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-light max-w-2xl mx-auto fade-in fade-in-delay-1">
          Uz vas u najtežim trenucima — kompletna podrška 24/7
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center fade-in fade-in-delay-2">
          <Link
            href="/kontakt"
            className="px-8 py-4 bg-primary-foreground text-primary font-medium text-sm tracking-wide rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Kontaktirajte Nas
          </Link>
          <Link
            href="/usluge"
            className="px-8 py-4 border border-primary-foreground text-primary-foreground font-medium text-sm tracking-wide rounded-lg hover:bg-primary-foreground hover:text-primary transition-all duration-300"
          >
            Naše Usluge
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in fade-in-delay-3">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary-foreground/50" />
      </div>
    </section>
  );
};

export default Hero;
