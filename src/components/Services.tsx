import { Clock, Smartphone, PlayCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const ref = useScrollAnimation();
  const { t } = useLanguage();

  const services = [
    { icon: Clock, title: t("svc_1_title"), description: t("svc_1_desc") },
    { icon: Smartphone, title: t("svc_2_title"), description: t("svc_2_desc") },
    { icon: PlayCircle, title: t("svc_3_title"), description: t("svc_3_desc") },
  ];

  return (
    <section id="services" className="py-32 bg-surface-low" ref={ref}>
      <div className="container mx-auto px-8">
        <div className="animate-on-scroll flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-primary font-headline font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              {t("svc_label")}
            </span>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
              {t("svc_title_1")} <br />{t("svc_title_2")}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed pb-2">
            {t("svc_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/50">
          {services.map((service, i) => (
            <div
              key={i}
              className="animate-on-scroll group p-12 bg-background hover:bg-surface-container transition-colors duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-sm mb-12 group-hover:scale-110 transition-transform">
                <service.icon size={24} />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">{service.description}</p>
              <div className="h-1 w-0 group-hover:w-12 bg-primary transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
