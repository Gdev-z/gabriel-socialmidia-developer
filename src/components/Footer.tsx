const footerLinks = ["SYSTEM_STATUS", "RESOURCES", "CONNECT", "SOURCE"];

const Footer = () => {
  return (
    <footer className="w-full py-20 mt-32 bg-surface-low border-t border-border/30">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-[1440px] mx-auto gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-primary font-black font-headline text-lg uppercase tracking-widest">
            ARCHITECT.SYSTEMS
          </span>
          <p className="text-xs tracking-widest uppercase text-muted-foreground/50">
            © 2024 KINETIC LUMINA. ENGINEERING ATTENTION.
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
        <p className="font-headline font-black text-6xl tracking-[1em] translate-y-8 select-none text-foreground">
          KINETIC
        </p>
      </div>
    </footer>
  );
};

export default Footer;
