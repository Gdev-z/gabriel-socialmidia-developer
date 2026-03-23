import { Terminal, Menu, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const navLinks = [
    { label: t("nav_ecosystem"), href: "#hero", active: true },
    { label: t("nav_services"), href: "#services" },
    { label: t("nav_works"), href: "#portfolio" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50">
      <div className="flex justify-between items-center w-full px-8 py-5 max-w-[1440px] mx-auto">
        <a href="#" className="flex items-center gap-3 group transition-all duration-500 hover:scale-105">
          <Terminal className="text-primary" size={22} />
          <span className="text-lg font-bold tracking-[0.2em] text-foreground font-headline uppercase">
            Gabriel.dev
          </span>
        </a>

        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-headline tracking-tighter uppercase text-xs font-bold transition-all duration-500 hover:text-primary ${
                link.active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-border/50 text-xs font-headline font-bold tracking-widest text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
          >
            <Globe size={14} />
            {lang === "pt" ? "EN" : "PT"}
          </button>
        </div>

        <button
          className="md:hidden text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-8 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-headline tracking-tighter uppercase text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 self-start px-3 py-1.5 rounded-sm border border-border/50 text-xs font-headline font-bold tracking-widest text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
          >
            <Globe size={14} />
            {lang === "pt" ? "EN" : "PT"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
