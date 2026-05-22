import { motion } from "framer-motion";
import { blogPosts } from "../data/blogPosts";

interface JournalProps {
  onSelectPost: (slug: string) => void;
}

export default function Journal({ onSelectPost }: JournalProps) {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Insights</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-body font-light text-text-primary leading-tight">
              Straight{" "}
              <em className="font-display not-italic italic neon-soft">talk</em>
            </h2>
            <p className="text-muted text-sm mt-3 max-w-md">
              No fluff — just honest takes on AI, automation, and building things that last.
            </p>
          </div>
          <button
            onClick={() => onSelectPost(blogPosts[0].slug)}
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-stroke px-5 py-2.5 text-sm text-muted hover:text-text-primary transition-colors duration-300"
          >
            Read all →
          </button>
        </motion.div>

        <div className="flex flex-col gap-3">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-60px" }}
              onClick={() => onSelectPost(post.slug)}
              className="group flex items-center gap-4 sm:gap-6 p-4 rounded-[40px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="flex-1 text-sm sm:text-base text-text-primary/80 group-hover:text-text-primary transition-colors duration-200 line-clamp-1">
                {post.title}
              </p>
              <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
                <span className="text-xs text-muted">{post.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-muted/40" />
                <span className="text-xs text-muted">{post.date}</span>
              </div>
              <span className="text-muted group-hover:text-text-primary transition-colors duration-200 text-sm flex-shrink-0">→</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
