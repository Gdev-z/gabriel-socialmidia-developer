import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "pt" | "en";

const translations = {
  // Navbar
  nav_ecosystem: { pt: "INÍCIO", en: "HOME" },
  nav_services: { pt: "SERVIÇOS", en: "SERVICES" },
  nav_works: { pt: "TRABALHOS", en: "WORKS" },

  // Hero
  hero_badge: { pt: "SISTEMA_ONLINE // V2.04", en: "SYSTEM_ONLINE // V2.04" },
  hero_title_1: { pt: "", en: "" },
  hero_title_2: { pt: "", en: "" },
  hero_subtitle: { pt: "Desenvolvedor Full Stack | Estrategista de Mídias Sociais & Vídeo.", en: "Full Stack Dev | Social Media & Video Strategist." },
  hero_cta: { pt: "EXPLORAR MEU ECOSSISTEMA", en: "EXPLORE MY ECOSYSTEM" },
  hero_status: { pt: "STATUS AO VIVO", en: "LIVE STATUS" },
  hero_systems: { pt: "Sistemas", en: "Systems" },
  hero_online: { pt: "ONLINE", en: "ONLINE" },
  hero_projects: { pt: "Projetos", en: "Projects" },
  hero_projects_count: { pt: "12 Ativos", en: "12 Active" },
  hero_uptime: { pt: "Disponibilidade", en: "Uptime" },

  // Hero Slide 2
  hero2_title_1: { pt: "", en: "" },
  hero2_title_2: { pt: "", en: "" },
  hero2_subtitle: { pt: "Soluções Profissionais em TypeScript & Node.js para escalar seu negócio digital.", en: "Professional TypeScript & Node.js solutions to scale your digital business." },

  // Services
  svc_label: { pt: "COMPETÊNCIAS_CENTRAIS", en: "CORE_FACULTIES" },
  svc_title_1: { pt: "EXECUÇÃO", en: "MULTIDISCIPLINARY" },
  svc_title_2: { pt: "MULTIDISCIPLINAR", en: "EXECUTION" },
  svc_desc: { pt: "Unindo precisão técnica com estratégia criativa para dominar a paisagem digital.", en: "Merging technical precision with creative strategy to dominate the digital landscape." },
  svc_1_title: { pt: "Arquitetura de Sistemas", en: "System Architecture" },
  svc_1_desc: { pt: "React, Node, Soluções Escaláveis. Construindo bases robustas que crescem com sua base de usuários.", en: "React, Node, Scalable Solutions. Building robust foundations that grow with your user base." },
  svc_2_title: { pt: "Engenharia de Atenção", en: "Attention Engineering" },
  svc_2_desc: { pt: "Estratégia de Crescimento, Geração de Leads, Autoridade de Marca. Gatilhos psicológicos aliados a resultados orientados por dados.", en: "Growth Strategy, Lead Gen, Brand Authority. Psychological triggers met with data-driven results." },
  svc_3_title: { pt: "Narrativa Visual", en: "Visual Narrative" },
  svc_3_desc: { pt: "Edição Cinematográfica, Storytelling, Reels de Alto Impacto. Retenção de audiência através de visuais de alta fidelidade.", en: "Cinematic Editing, Storytelling, High-Impact Reels. Retaining viewership through high-fidelity visuals." },

  // Tech Stack
  tech_label: { pt: "FERRAMENTAS DO OFÍCIO", en: "TOOLS OF THE TRADE" },

  // Portfolio
  portfolio_title: { pt: "TRABALHOS SELECIONADOS", en: "SELECTED WORKS" },
  portfolio_1_tag: { pt: "Desenvolvimento", en: "Development" },
  portfolio_1_title: { pt: "CAPTAÇÃO DE LEADS", en: "LEADS GENERATION" },
  portfolio_2_tag: { pt: "Estratégia", en: "Strategy" },
  portfolio_2_title: { pt: "MOTOR DE ATENÇÃO V1", en: "ATTENTION ENGINE V1" },
  portfolio_3_tag: { pt: "Vídeo", en: "Video" },
  portfolio_3_title: { pt: "FRAGMENTOS CINEMÁTICOS", en: "CINEMATIC FRAGMENTS" },

  // About Me
  about_label: { pt: "SOBRE_MIM", en: "ABOUT_ME" },
  about_title: { pt: "Engenharia de Precisão: Do Silício ao Código.", en: "Precision Engineering: From Silicon to Code." },
  about_text: { pt: "Minha base vem da manutenção avançada de hardware. Essa experiência me deu uma visão que poucos devs possuem: a capacidade de entender a tecnologia de dentro para fora. Hoje, uso essa mentalidade analítica para construir ecossistemas digitais que não apenas existem, mas performam.", en: "My foundation comes from advanced hardware maintenance. This experience gave me an insight few devs possess: the ability to understand technology from the inside out. Today, I use this analytical mindset to build digital ecosystems that don't just exist — they perform." },
  about_pillar_1_title: { pt: "Diagnóstico Preciso", en: "Precise Diagnostics" },
  about_pillar_1_desc: { pt: "Identifico gargalos que impedem sua conversão.", en: "I identify bottlenecks that block your conversion." },
  about_pillar_2_title: { pt: "Performance Extrema", en: "Extreme Performance" },
  about_pillar_2_desc: { pt: "Sistemas leves, rápidos e otimizados para o motor da web.", en: "Lightweight, fast systems optimized for the web engine." },
  about_pillar_3_title: { pt: "Arquitetura de Escala", en: "Scalable Architecture" },
  about_pillar_3_desc: { pt: "Funis de vendas construídos para suportar alto volume de leads.", en: "Sales funnels built to handle high-volume leads." },

  // CTA
  cta_title: { pt: "PRONTO PARA ESCALAR?", en: "READY TO SCALE?" },
  cta_desc: { pt: "Vamos construir sua arquitetura digital e dominar seu nicho com engenharia de precisão.", en: "Let's build your digital architecture and dominate your niche with precision engineering." },
  cta_button: { pt: "INICIAR PROJETO", en: "INITIATE PROJECT" },

  // Footer
  footer_copyright: { pt: "© 2026 ENGENHARIA DE ATENÇÃO.", en: "© 2024 KINETIC LUMINA. ENGINEERING ATTENTION." },
  footer_status: { pt: "STATUS_SISTEMA", en: "SYSTEM_STATUS" },
  footer_resources: { pt: "RECURSOS", en: "RESOURCES" },
  footer_connect: { pt: "CONECTAR", en: "CONNECT" },
  footer_source: { pt: "CÓDIGO", en: "SOURCE" },
} as const;

type TranslationKey = keyof typeof translations;

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("pt");

  const toggleLang = () => setLang((prev) => (prev === "pt" ? "en" : "pt"));
  const t = (key: TranslationKey) => translations[key][lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
