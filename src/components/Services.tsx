import { Terminal, Network, PlayCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Terminal,
    title: "System Architecture",
    description: "React, Node, Scalable Solutions. Building robust foundations that grow with your user base.",
  },
  {
    icon: Network,
    title: "Attention Engineering",
    description: "Growth Strategy, Lead Gen, Brand Authority. Psychological triggers met with data-driven results.",
  },
  {
    icon: PlayCircle,
    title: "Visual Narrative",
    description: "Cinematic Editing, Storytelling, High-Impact Reels. Retaining viewership through high-fidelity visuals.",
  },
];

const Services = () => {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="py-32 bg-surface-low" ref={ref}>
      <div className="container mx-auto px-8">
        <div className="animate-on-scroll flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-primary font-headline font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              CORE_FACULTIES
            </span>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
              MULTIDISCIPLINARY <br />EXECUTION
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed pb-2">
            Merging technical precision with creative strategy to dominate the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/50">
          {services.map((service, i) => (
            <div
              key={service.title}
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
