import { useEffect } from "react";
import { motion } from "framer-motion";
import type { BlogPost as BlogPostType } from "../data/blogPosts";
import { blogPosts } from "../data/blogPosts";

const GRAD = "linear-gradient(135deg, #2563FF 0%, #7C3AED 100%)";

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
  onSelectPost: (slug: string) => void;
}

export default function BlogPost({ post, onBack, onSelectPost }: BlogPostProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [post.slug]);

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Split title around italicized word
  const titleParts = post.title.split(post.italicWord);

  return (
    <article className="bg-bg min-h-screen pb-24 pt-32 md:pt-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-stroke px-4 py-2 text-xs text-muted hover:text-text-primary hover:border-muted/50 transition-colors duration-300 mb-10"
        >
          ← Back to home
        </motion.button>

        {/* Title block */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[820px] mb-10 md:mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Insights</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-body font-light text-text-primary leading-[1.1] tracking-tight mb-7">
            {titleParts.map((part, i) => (
              <span key={i}>
                {part}
                {i < titleParts.length - 1 && (
                  <em className="font-display not-italic italic neon-soft">
                    {post.italicWord}
                  </em>
                )}
              </span>
            ))}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full"
                style={{ background: GRAD }}
              />
              <span className="text-text-primary/80">{post.author}</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-muted/40" />
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-muted/40" />
            <span>{post.readTime}</span>
            <div className="hidden sm:flex items-center gap-2 ml-3 pl-3 border-l border-stroke">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.2em] uppercase text-muted/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.header>

        {/* Hero image — editorial card, not full bleed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-14 md:mb-20 border border-stroke"
        >
          <img
            src={post.img}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 halftone opacity-15 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
        </motion.div>

        {/* Article body */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_700px_1fr] gap-8">
          <div className="hidden lg:block" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="min-w-0"
          >
            <p className="text-xl md:text-2xl text-text-primary/90 leading-[1.5] mb-12 font-light tracking-tight">
              {post.excerpt}
            </p>

            <div className="space-y-7 text-text-primary/80">
              {post.content.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={i}
                      className="text-2xl md:text-[28px] font-body font-medium text-text-primary mt-14 mb-1 leading-snug tracking-tight"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "p") {
                  return (
                    <p
                      key={i}
                      className="text-[17px] md:text-[18px] leading-[1.75] text-text-primary/75"
                    >
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} className="space-y-3.5 my-2 pl-1">
                      {block.items?.map((item, j) => (
                        <li
                          key={j}
                          className="flex gap-4 text-[17px] md:text-[18px] text-text-primary/75 leading-[1.7]"
                        >
                          <span
                            className="mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: GRAD }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={i}
                      className="my-12 pl-7 pr-2 py-2 border-l-2 text-2xl md:text-[28px] italic font-display text-text-primary leading-[1.35]"
                      style={{ borderColor: "#7C3AED" }}
                    >
                      "{block.text}"
                    </blockquote>
                  );
                }
                return null;
              })}
            </div>

            {/* Tag pills below article */}
            <div className="flex flex-wrap gap-2 mt-16 pt-8 border-t border-stroke">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-surface border border-stroke text-muted"
                >
                  #{tag.toLowerCase().replace(/\s+/g, "-")}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="hidden lg:block" />
        </div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative mt-24 rounded-3xl border border-stroke bg-surface/40 overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{ background: GRAD }}
          />
          <div className="relative p-10 md:p-14 text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-muted mb-4">
              Want this for your business?
            </p>
            <h3 className="text-3xl md:text-4xl font-body font-light mb-4 text-text-primary">
              Let's{" "}
              <em className="font-display not-italic italic neon-soft">build</em>{" "}
              something.
            </h3>
            <p className="text-muted text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
              Tell us what's slowing you down. We'll tell you exactly how we'd fix it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/923425194397"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-105"
                style={{ background: GRAD }}
              >
                Start on WhatsApp ↗
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=autom8xsystems@gmail.com&su=Project%20inquiry%20—%20autom8X%20Systems"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-stroke px-7 py-3.5 text-sm text-text-primary hover:bg-surface transition-colors"
              >
                Email us
              </a>
            </div>
          </div>
        </motion.div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-24">
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-px bg-stroke" />
                  <span className="text-xs text-muted uppercase tracking-[0.3em]">
                    Keep reading
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-body font-light text-text-primary">
                  More from the{" "}
                  <em className="font-display not-italic italic neon-soft">journal</em>
                </h3>
              </div>
              <button
                onClick={onBack}
                className="hidden md:inline-flex items-center gap-2 rounded-full border border-stroke px-5 py-2.5 text-sm text-muted hover:text-text-primary transition-colors duration-300"
              >
                All posts →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((rp) => (
                <motion.button
                  key={rp.slug}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => onSelectPost(rp.slug)}
                  className="group text-left bg-surface/40 border border-stroke rounded-2xl overflow-hidden hover:border-muted/50 transition-colors duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={rp.img}
                      alt={rp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-muted mb-3">
                      <span>{rp.date}</span>
                      <span className="w-1 h-1 rounded-full bg-muted/40" />
                      <span>{rp.readTime}</span>
                    </div>
                    <h4 className="text-base md:text-lg font-medium text-text-primary/90 leading-snug group-hover:text-text-primary transition-colors line-clamp-2 mb-3">
                      {rp.title}
                    </h4>
                    <span className="text-xs text-muted group-hover:text-text-primary transition-colors">
                      Read article →
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
