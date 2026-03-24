import { Wrench, Zap, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutMe = () => {
  const ref = useScrollAnimation();
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Wrench,
      title: t("about_pillar_1_title"),
      description: t("about_pillar_1_desc"),
    },
    {
      icon: Zap,
      title: t("about_pillar_2_title"),
      description: t("about_pillar_2_desc"),
    },
    {
      icon: TrendingUp,
      title: t("about_pillar_3_title"),
      description: t("about_pillar_3_desc"),
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden"
      ref={ref}
      style={{ background: "linear-gradient(180deg, #0a0f1a 0%, #0d1520 50%, #0a0f1a 100%)" }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="animate-on-scroll mb-6">
          <span
            className="font-headline font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
            style={{ color: "hsl(var(--primary))" }}
          >
            {t("about_label")}
          </span>
        </div>

        <div className="animate-on-scroll flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-white max-w-2xl leading-[1.1]">
            {t("about_title")}
          </h2>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed md:pt-4">
            {t("about_text")}
          </p>
        </div>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="animate-on-scroll group relative rounded-lg p-8 transition-all duration-500"
              style={{
                transitionDelay: `${i * 120}ms`,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 0 1px hsl(var(--primary) / 0.5), 0 0 30px -5px hsl(var(--primary) / 0.25)",
                }}
              />

              <div
                className="w-12 h-12 flex items-center justify-center rounded-sm mb-8"
                style={{
                  background: "hsl(var(--primary) / 0.1)",
                  color: "hsl(var(--primary))",
                }}
              >
                <pillar.icon size={24} />
              </div>

              <h3 className="font-headline text-xl font-bold mb-3 tracking-tight text-white">
                {pillar.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {pillar.description}
              </p>

              <div
                className="mt-6 h-px w-0 group-hover:w-12 transition-all duration-500"
                style={{ background: "hsl(var(--primary))" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
