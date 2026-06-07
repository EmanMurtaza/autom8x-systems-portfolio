import { Suspense, lazy, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./index.css";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import { getPostBySlug } from "./data/blogPosts";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

const Work = lazy(() => import("./components/Work"));
const Journal = lazy(() => import("./components/Journal"));
const Explorations = lazy(() => import("./components/Explorations"));
const Stats = lazy(() => import("./components/Stats"));
const Footer = lazy(() => import("./components/Footer"));
const BlogPost = lazy(() => import("./components/BlogPost"));

const SectionFallback = () => (
  <div className="bg-bg py-24" aria-hidden="true" />
);

function AppInner() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const { lang } = useLanguage();

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
    history.pushState("", document.title, window.location.pathname + window.location.search);
    setSelectedSlug(null);
  };

  const post = selectedSlug ? getPostBySlug(selectedSlug, lang) : undefined;

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
            <Suspense fallback={<SectionFallback />}>
              <BlogPost
                key={post.slug}
                post={post}
                onBack={closePost}
                onSelectPost={openPost}
              />
            </Suspense>
          ) : (
            <main>
              <Hero />
              <Services />
              <Suspense fallback={<SectionFallback />}>
                <Work />
                <Journal onSelectPost={openPost} />
                <Explorations />
                <Stats />
                <Footer />
              </Suspense>
            </main>
          )}
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}
