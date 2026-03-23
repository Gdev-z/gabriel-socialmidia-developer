import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const ref = useScrollAnimation();
  const { t } = useLanguage();

  // Configuração do WhatsApp
  const phoneNumber = "5513996711519"; // Substitua pelo seu número (DDI + DDD + Número)
  const message = encodeURIComponent("Olá Gabriel! Vi seu portfólio e gostaria de conversar sobre um projeto de sistema.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="py-32 container mx-auto px-8" ref={ref}>
      <div className="animate-on-scroll glass-panel p-16 rounded-sm relative overflow-hidden group">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground">
              {t("cta_title")}
            </h2>
            <p 
            className="text-muted-foreground text-lg max-w-md">
              {t("cta_desc")}
            </p>
          </div>
          
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-background hover:bg-primary hover:text-primary-foreground px-12 py-6 rounded-sm font-headline font-black uppercase tracking-[0.2em] transition-all duration-500 active:scale-95 text-sm inline-block"
          >
            {t("cta_button")}
          </a>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-1000" />
      </div>
    </section>
  );
};

export default CTASection;