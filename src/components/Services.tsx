import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Web Development",
    italic: "Development",
    description:
      "Your website should work as hard as you do. We build fast, beautiful, custom web apps — from sharp landing pages to full SaaS platforms — that actually convert.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&q=70&auto=format",
  },
  {
    id: "02",
    title: "AI Solutions",
    italic: "Solutions",
    description:
      "Stop leaving AI on the table. We plug real intelligence into your product — smarter search, predictive features, custom LLM workflows — so you stay ahead of the curve.",
    tags: ["LLMs", "RAG", "Fine-tuning", "Vector Search"],
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=640&q=70&auto=format",
  },
  {
    id: "03",
    title: "Business Automation",
    italic: "Automation",
    description:
      "If your team is doing something on repeat, we can automate it. We connect your tools, clean up your workflows, and build pipelines that just run — no babysitting required.",
    tags: ["n8n", "Zapier", "Make", "APIs"],
    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=640&q=70&auto=format",
  },
  {
    id: "04",
    title: "AI Assistants",
    italic: "Assistants",
    description:
      "What if your best team member never slept? We build AI assistants trained on your business — handling support, qualifying leads, and answering questions at any hour.",
    tags: ["Chatbots", "Voice AI", "Knowledge Base", "CRM"],
    img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=640&q=70&auto=format",
  },
];

const colSpanClass = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
];

export default function Services() {
  return (
    <section id="services" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-end justify-between mb-10 md:mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">What We Do</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-body font-light text-text-primary leading-tight">
              Our core{" "}
              <em className="font-display not-italic italic neon-soft">services</em>
            </h2>
            <p className="text-muted text-sm mt-3 max-w-md">
              Everything your business needs to move faster and work smarter.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden md:inline-flex relative group items-center gap-2 rounded-full border border-stroke px-5 py-2.5 text-sm text-muted hover:text-text-primary transition-colors duration-300 overflow-visible"
          >
            <span
              className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, #2563FF 0%, #7C3AED 100%)", zIndex: -1 }}
            />
            <span className="relative z-10 flex items-center gap-2 bg-bg rounded-full px-5 py-2.5 -mx-5 -my-2.5 group-hover:bg-bg transition-colors">
              Get in touch →
            </span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-80px" }}
              className={`${colSpanClass[i]} group relative bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer h-[320px] md:h-[400px]`}
            >
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 halftone opacity-20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/30 to-transparent" />
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-lg" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <span className="text-xs text-muted/60 font-mono mb-auto pt-4">{s.id}</span>
                <div className="mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transform">
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-surface/80 border border-stroke text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-body font-medium text-text-primary mb-2">
                  {s.title.replace(s.italic, "")}{" "}
                  <em className="font-display not-italic italic">{s.italic}</em>
                </h3>
                <p className="text-sm text-muted leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-32 overflow-hidden">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
