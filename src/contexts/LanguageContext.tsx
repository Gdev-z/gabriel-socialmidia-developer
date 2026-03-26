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
  svc_title_1: { pt: "POR QUE VOCÊ ESTÁ", en: "MULTIDISCIPLINARY" },
  svc_title_2: { pt: "PERDENDO DINHEIRO?", en: "EXECUTION" },
  svc_desc: { pt: "Pare de perder leads para páginas amadoras. Eu construo a engenharia da sua Landing Page focada em conversão em até 48 horas.", en: "Merging technical precision with creative strategy to dominate the digital landscape." },
  svc_1_title: { pt: "Perda de Tempo", en: "Waste of Time" },
  svc_1_desc: { pt: "Você gasta horas no WhatsApp com curiosos porque sua página não filtra os leads.", en: "You spend hours on WhatsApp dealing with curious people because your page doesn't filter leads." },
  svc_2_title: { pt: "Páginas Lentas", en: "Slow Pages" },
  svc_2_desc: { pt: "Seu site atual demora para carregar no 4G e o cliente desiste antes de ver a oferta.", en: "Your current website takes too long to load on 4G, and customers give up before even seeing the offer." },
  svc_3_title: { pt: "Narrativa Visual", en: "Visual Narrative" },
  svc_3_desc: { pt: "Transmita o que seu cliente  tem que saber com Narrativa visual e não apenas com textos.", en: "Convey what your client needs to know with visual storytelling, not just text." },

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
  about_title: { pt: "A Precisão do Hardware aplicada à Inteligência do seu Negócio.", en: "Hardware precision applied to your business intelligence." },
  about_text: { pt: "  Minha jornada começou na eletrônica avançada, onde aprendi que um único componente falhando pode parar uma máquina inteira. Essa obsessão pela precisão me moldou como Engenheiro Full Stack. Hoje, não entrego apenas código; entrego infraestruturas que eliminam o caos manual. Enquanto outros focam em 'fazer um site', eu foco em construir o motor que limpa seus dados, automatiza sua prospecção e garante que você gaste seu tempo fechando contratos, não limpando planilhas.", en: "My journey began in advanced electronics, where I learned that a single failing component can bring an entire machine to a standstill. This obsession with precision shaped me into a Full Stack Engineer.Today, I don't just deliver code; I deliver infrastructure that eliminates manual chaos. While others focus on 'making a website,' I focus on building the engine that cleans your data, automates your prospecting, and ensures you spend your time closing deals, not cleaning spreadsheets." },
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
  footer_status: { pt: "INSTAGRAM", en: "INSTAGRAM" },
  footer_resources: { pt: "GITHUB", en: "GITHUB" },
  footer_connect: { pt: "LINKEDIN", en: "LINKEDIN" },
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
