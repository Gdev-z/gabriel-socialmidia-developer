import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const ref = useScrollAnimation();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient network-bg">
      {/* Background blurs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-8 relative z-10" ref={ref}>
        <div className="max-w-4xl">
          <div className="animate-on-scroll inline-flex items-center gap-2 mb-8 px-3 py-1.5 bg-primary/10 text-primary rounded-sm border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-headline">
              SYSTEM_ONLINE // V2.04
            </span>
          </div>

          <h1 className="animate-on-scroll font-headline text-5xl md:text-8xl font-bold tracking-tighter text-foreground leading-[0.9] mb-8">
            ENGINEERING ATTENTION, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
              BUILDING SYSTEMS.
            </span>
          </h1>

          <div className="animate-on-scroll flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <p className="text-muted-foreground text-lg md:text-xl font-light tracking-wide max-w-lg border-l-2 border-primary/30 pl-6 py-2">
              Full Stack Dev | Social Media &amp; Video Strategist.
            </p>
            <button className="group relative flex items-center gap-4 bg-primary text-primary-foreground px-8 py-5 rounded-sm font-headline font-bold uppercase tracking-widest text-sm transition-all duration-500 active:scale-95 overflow-hidden hover:shadow-lg hover:shadow-primary/20">
              <span className="relative z-10">EXPLORE MY ECOSYSTEM</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={18} />
              <div className="absolute inset-0 bg-primary-glow translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </div>
        </div>

        {/* Glassmorphism floating element */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
          <div className="glass-panel rounded-lg p-8 w-72">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="font-headline text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                LIVE STATUS
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Systems</span>
                <span className="font-headline font-bold text-primary">ONLINE</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Projects</span>
                <span className="font-headline font-bold text-foreground">12 Active</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Uptime</span>
                <span className="font-headline font-bold text-foreground">99.9%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large text watermark */}
      <div className="absolute right-0 bottom-20 hidden lg:block opacity-[0.03]">
        <span className="font-headline text-[15rem] font-black tracking-tighter select-none rotate-90 origin-bottom-right text-foreground">
          ARCHITECT
        </span>
      </div>
    </section>
  );
};

export default Hero;
