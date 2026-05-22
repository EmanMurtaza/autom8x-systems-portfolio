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

  return (
    <article className="bg-bg min-h-screen pb-20">
      {/* Hero image with gradient overlay */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <img
          src={post.img}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/60 to-bg" />
        <div className="absolute inset-0 halftone opacity-20 mix-blend-multiply" />

        {/* Back button */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-28">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-stroke/60 bg-surface/40 backdrop-blur-md px-4 py-2 text-sm text-muted hover:text-text-primary hover:border-stroke transition-colors duration-300"
          >
            ← Back to home
          </button>
        </div>

        {/* Title block */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pb-12 md:pb-16"
          >
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.25em] uppercase text-muted border border-stroke/70 rounded-full px-3 py-1 bg-surface/40 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-body font-light text-text-primary leading-[1.1] max-w-4xl">
              {post.title.split(post.italicWord).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <em className="font-display not-italic italic neon-soft">
                      {post.italicWord}
                    </em>
                  )}
                </span>
              ))}
            </h1>
            <div className="flex items-center gap-3 mt-6 text-xs text-muted">
              <span>{post.author}</span>
              <span className="w-1 h-1 rounded-full bg-muted/40" />
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-muted/40" />
              <span>{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-[760px] mx-auto px-6 md:px-10 pt-12 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-text-primary/80 leading-relaxed mb-10 font-light">
            {post.excerpt}
          </p>

          <div className="prose-content space-y-6 text-text-primary/85 leading-relaxed">
            {post.content.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="text-2xl md:text-3xl font-body font-medium text-text-primary mt-12 mb-2 leading-snug"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "p") {
                return (
                  <p key={i} className="text-base md:text-lg leading-[1.8] text-text-primary/75">
                    {block.text}
                  </p>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="space-y-3 my-6 pl-2">
                    {block.items?.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-base md:text-lg text-text-primary/75 leading-relaxed"
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
                    className="my-10 pl-6 border-l-2 text-xl md:text-2xl italic font-display text-text-primary leading-snug"
                    style={{ borderColor: "#7C3AED" }}
                  >
                    "{block.text}"
                  </blockquote>
                );
              }
              return null;
            })}
          </div>

          {/* CTA */}
          <div className="mt-20 pt-10 border-t border-stroke">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-muted mb-4">
                Want this for your business?
              </p>
              <h3 className="text-2xl md:text-3xl font-body font-light mb-6 text-text-primary">
                Let's{" "}
                <em className="font-display not-italic italic neon-soft">talk</em>
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/923425194397"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium text-white"
                  style={{ background: GRAD }}
                >
                  Start a project ↗
                </a>
                <button
                  onClick={onBack}
                  className="inline-flex items-center justify-center rounded-full border border-stroke px-7 py-3.5 text-sm text-muted hover:text-text-primary transition-colors"
                >
                  ← Back to home
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">
              Keep reading
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((rp) => (
              <button
                key={rp.slug}
                onClick={() => onSelectPost(rp.slug)}
                className="group text-left bg-surface/40 border border-stroke rounded-2xl overflow-hidden hover:bg-surface transition-colors duration-300"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={rp.img}
                    alt={rp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted mb-2">
                    <span>{rp.date}</span>
                    <span className="w-1 h-1 rounded-full bg-muted/40" />
                    <span>{rp.readTime}</span>
                  </div>
                  <h4 className="text-base font-medium text-text-primary/90 leading-snug group-hover:text-text-primary transition-colors line-clamp-2">
                    {rp.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
