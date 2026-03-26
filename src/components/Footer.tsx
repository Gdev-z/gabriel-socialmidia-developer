import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  // Array de objetos para facilitar a manutenção
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/gabriel-antonio-zanon/" },
    { name: "GitHub", url: "https://github.com/gdev-z" },
    { name: "Instagram", url: "https://www.instagram.com/gabriel_antonio_zanon/" },
    { name: "WhatsApp", url: "https://wa.me/5513996711519" }, // Coloque seu número real aqui
  ];

  return (
    <footer className="w-full py-20 mt-32 bg-surface-low border-t border-border/30">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-[1440px] mx-auto gap-8">
        
        <div className="flex flex-col gap-2">
          <span className="text-primary font-black font-headline text-lg uppercase tracking-widest">
            Gabriel.dev
          </span>
          <p className="text-xs tracking-widest uppercase text-muted-foreground/50">
            {t("footer_copyright")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {socialLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank" // Abre em nova aba para não tirar o cliente do seu site
              rel="noopener noreferrer" // Segurança para links externos
              className={`text-xs tracking-widest uppercase transition-all duration-700 hover:text-primary hover:tracking-[0.3em] ${
                // Mantive o destaque no último item (WhatsApp no caso)
                i === socialLinks.length - 1
                  ? "text-primary underline decoration-2 underline-offset-8"
                  : "text-muted-foreground/50"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center opacity-[0.03]">
        <p className="font-headline font-black text-4xl md:text-8xl tracking-[1em] translate-y-8 select-none text-foreground">
          SMART
        </p>
      </div>
    </footer>
  );
};

export default Footer;