import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./index.css";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Journal from "./components/Journal";
import Explorations from "./components/Explorations";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import BlogPost from "./components/BlogPost";
import { getPostBySlug } from "./data/blogPosts";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  // Read slug from URL hash on mount + on hash changes (so the back button works)
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#\/post\/(.+)$/);
      setSelectedSlug(match ? match[1] : null);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const openPost = (slug: string) => {
    window.location.hash = `#/post/${slug}`;
    setSelectedSlug(slug);
  };

  const closePost = () => {
    // Clear the hash without jumping the page
    history.pushState("", document.title, window.location.pathname + window.location.search);
    setSelectedSlug(null);
  };

  const post = selectedSlug ? getPostBySlug(selectedSlug) : undefined;

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          {post ? (
            <BlogPost
              key={post.slug}
              post={post}
              onBack={closePost}
              onSelectPost={openPost}
            />
          ) : (
            <main>
              <Hero />
              <Services />
              <Work />
              <Journal onSelectPost={openPost} />
              <Explorations />
              <Stats />
              <Footer />
            </main>
          )}
        </>
      )}
    </>
  );
}
