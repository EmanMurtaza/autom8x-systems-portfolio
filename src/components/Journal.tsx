import { motion } from "framer-motion";

const posts = [
  {
    title: "Why Every Business Needs an AI Strategy in 2026",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80",
    readTime: "5 min read",
    date: "May 2026",
  },
  {
    title: "Automating Your Sales Pipeline: A Complete Guide",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    readTime: "8 min read",
    date: "Apr 2026",
  },
  {
    title: "Building RAG Systems That Actually Work",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
    readTime: "12 min read",
    date: "Mar 2026",
  },
  {
    title: "From Idea to Production: Web App in 2 Weeks",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    readTime: "6 min read",
    date: "Feb 2026",
  },
];

export default function Journal() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Insights
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-body font-light text-text-primary leading-tight">
              Recent{" "}
              <em className="font-display not-italic italic">thoughts</em>
            </h2>
            <p className="text-muted text-sm mt-3 max-w-md">
              Practical guides and perspectives on AI, automation, and modern web.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 rounded-full border border-stroke px-5 py-2.5 text-sm text-muted hover:text-text-primary transition-colors duration-300">
            View all →
          </button>
        </motion.div>

        {/* Posts list */}
        <div className="flex flex-col gap-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-60px" }}
              className="group flex items-center gap-4 sm:gap-6 p-4 rounded-[40px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke transition-all duration-300 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <p className="flex-1 text-sm sm:text-base text-text-primary/80 group-hover:text-text-primary transition-colors duration-200 line-clamp-1">
                {post.title}
              </p>

              {/* Meta */}
              <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
                <span className="text-xs text-muted">{post.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-muted/40" />
                <span className="text-xs text-muted">{post.date}</span>
              </div>

              {/* Arrow */}
              <span className="text-muted group-hover:text-text-primary transition-colors duration-200 text-sm flex-shrink-0">
                →
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
