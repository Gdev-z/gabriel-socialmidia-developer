import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tools = ["React", "Node.js", "GitHub", "Adobe Ps", "CapCut"];

const TechStack = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 border-y border-border/30" ref={ref}>
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center">
          <span className="animate-on-scroll text-[10px] font-bold tracking-[0.5em] uppercase text-muted-foreground mb-12">
            TOOLS OF THE TRADE
          </span>
          <div className="animate-on-scroll flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-all duration-700">
            {tools.map((tool) => (
              <div key={tool} className="flex items-center gap-2 cursor-default group">
                <span className="font-headline font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
