import { ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg1 from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/banner 3.jpeg";

const SLIDE_INTERVAL = 5000;

const Hero = () => {
  const ref = useScrollAnimation();
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? 1 : 0));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slides = [
    {
      bg: heroBg1,
      title1: t("hero_title_1"),
      title2: t("hero_title_2"),
      subtitle: t("hero_subtitle"),
    },
    {
      bg: heroBg2,
      title1: t("hero2_title_1"),
      title2: t("hero2_title_2"),
      subtitle: t("hero2_subtitle"),
    },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: activeSlide === i ? 1 : 0 }}
        >
          <img src={slide.bg} alt="" className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <div className="max-w-4xl">
          <div className="animate-on-scroll inline-flex items-center gap-2 mb-8 px-3 py-1.5 bg-white/15 text-white rounded-sm border border-white/25">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-headline">
              {t("hero_badge")}
            </span>
          </div>

          {/* Slide text with crossfade */}
          <div className="relative min-h-[220px] md:min-h-[260px]">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-all duration-700 ease-in-out"
                style={{
                  opacity: activeSlide === i ? 1 : 0,
                  transform: activeSlide === i ? "translateY(0)" : "translateY(16px)",
                  pointerEvents: activeSlide === i ? "auto" : "none",
                }}
              >
                <h1 className="font-headline text-4xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9] mb-8">
                  {slide.title1} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
                    {slide.title2}
                  </span>
                </h1>
              </div>
            ))}
          </div>

          <div className="animate-on-scroll flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            {/* Subtitle crossfade */}
            <div className="relative min-h-[80px] flex-1 max-w-lg">
              {slides.map((slide, i) => (
                <p
                  key={i}
                  className="absolute inset-0 text-white/70 text-lg md:text-xl font-light tracking-wide border-l-2 border-white/30 pl-6 py-2 transition-opacity duration-700"
                  style={{
                    opacity: activeSlide === i ? 1 : 0,
                    pointerEvents: activeSlide === i ? "auto" : "none",
                  }}
                >
                  {slide.subtitle}
                </p>
              ))}
            </div>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative flex items-center gap-4 bg-primary text-primary-foreground px-8 py-5 rounded-sm font-headline font-bold uppercase tracking-widest text-sm transition-all duration-500 active:scale-95 overflow-hidden hover:shadow-lg hover:shadow-primary/20"
            >
              <span className="relative z-10">{t("hero_cta")}</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={18} />
              <div className="absolute inset-0 bg-primary-glow translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
          </div>

          {/* Carousel indicators */}
          <div className="flex gap-3 mt-12">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className="relative h-1 rounded-full overflow-hidden transition-all duration-500"
                style={{ width: activeSlide === i ? 48 : 24 }}
                aria-label={`Slide ${i + 1}`}
              >
                <div className="absolute inset-0 bg-white/30 rounded-full" />
                {activeSlide === i && (
                  <div
                    className="absolute inset-0 bg-primary rounded-full origin-left"
                    style={{ animation: `carousel-progress ${SLIDE_INTERVAL}ms linear` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Status panel */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-8 w-72 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="font-headline text-xs font-bold tracking-[0.2em] text-white/60 uppercase">
                {t("hero_status")}
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">{t("hero_systems")}</span>
                <span className="font-headline font-bold text-primary">{t("hero_online")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">{t("hero_projects")}</span>
                <span className="font-headline font-bold text-white">{t("hero_projects_count")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">{t("hero_uptime")}</span>
                <span className="font-headline font-bold text-white">99.9%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-20 hidden lg:block opacity-[0.03]">
        <span className="font-headline text-[15rem] font-black tracking-tighter select-none rotate-90 origin-bottom-right text-white">
          ARCHITECT
        </span>
      </div>
    </section>
  );
};

export default Hero;
