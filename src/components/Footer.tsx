import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = [
    t("footer_status"),
    t("footer_resources"),
    t("footer_connect"),
    t("footer_source"),
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
          {footerLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`text-xs tracking-widest uppercase transition-all duration-700 hover:text-primary hover:tracking-[0.3em] ${
                i === footerLinks.length - 1
                  ? "text-primary underline decoration-2 underline-offset-8"
                  : "text-muted-foreground/50"
              }`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-16 text-center opacity-[0.03]">
        <p className="font-headline font-black text-4xl md:text-8x tracking-[1em] translate-y-8 select-none text-foreground">
          SMART
        </p>
      </div>
    </footer>
  );
};

export default Footer;
