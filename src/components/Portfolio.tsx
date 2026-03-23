import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  { tag: "Development", title: "NEURAL_NET DASHBOARD", image: portfolio1 },
  { tag: "Strategy", title: "ATTENTION ENGINE V1", image: portfolio2 },
  { tag: "Video", title: "CINEMATIC FRAGMENTS", image: portfolio3 },
];

const Portfolio = () => {
  const ref = useScrollAnimation();

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-8">
        <div className="animate-on-scroll mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground">
            SELECTED WORKS
          </h2>
          <div className="w-24 h-1 bg-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="animate-on-scroll group relative aspect-[4/5] bg-surface-container overflow-hidden rounded-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-xl"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <img
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-70"
                src={project.image}
                loading="lazy"
                width={800}
                height={1000}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] text-primary font-bold tracking-widest uppercase mb-2 block">
                  {project.tag}
                </span>
                <h3 className="font-headline text-xl font-bold mb-4 text-foreground">{project.title}</h3>
                <ArrowUpRight className="text-foreground group-hover:text-primary transition-colors" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
