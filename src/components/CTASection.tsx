import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-32 container mx-auto px-8" ref={ref}>
      <div className="animate-on-scroll glass-panel p-16 rounded-sm relative overflow-hidden group">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground">
              READY TO SCALE?
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Let's build your digital architecture and dominate your niche with precision engineering.
            </p>
          </div>
          <button className="bg-foreground text-background hover:bg-primary hover:text-primary-foreground px-12 py-6 rounded-sm font-headline font-black uppercase tracking-[0.2em] transition-all duration-500 active:scale-95 text-sm">
            INITIATE PROJECT
          </button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-1000" />
      </div>
    </section>
  );
};

export default CTASection;
