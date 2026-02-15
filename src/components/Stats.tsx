import { useScrollFade } from "@/hooks/useScrollFade";

const stats = [
  { value: "25+", label: "Godina Iskustva" },
  { value: "10,000+", label: "Organizovanih Sahrana" },
  { value: "24/7", label: "Dostupnost Non-Stop" },
  { value: "6", label: "Zemalja Evrope" },
];

const Stats = () => {
  const ref = useScrollFade();

  return (
    <section id="stats" className="py-24 md:py-32 bg-primary" ref={ref}>
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span className="block text-4xl md:text-6xl font-serif font-bold text-primary-foreground">
                {s.value}
              </span>
              <span className="mt-3 block text-sm tracking-widest uppercase text-primary-foreground/60">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
