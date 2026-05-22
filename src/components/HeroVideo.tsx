import { useEffect, useRef } from "react";

const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

interface HeroVideoProps {
  flipped?: boolean;
  overlayClass?: string;
}

export default function HeroVideo({
  flipped = false,
  overlayClass = "bg-black/20",
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance: { destroy: () => void } | null = null;
    let cancelled = false;

    // Wait for an idle moment so the video doesn't fight the first paint
    const idle =
      (window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number })
        .requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 200));

    idle(async () => {
      if (cancelled) return;

      // Native HLS (Safari / iOS) — no library needed
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = HLS_SRC;
        return;
      }

      // Lazy-import hls.js only when actually needed
      const { default: Hls } = await import("hls.js");
      if (cancelled) return;

      if (Hls.isSupported()) {
        const hls = new Hls({ capLevelToPlayerSize: true });
        hls.loadSource(HLS_SRC);
        hls.attachMedia(video);
        hlsInstance = hls;
      }
    });

    return () => {
      cancelled = true;
      hlsInstance?.destroy();
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        style={flipped ? { transform: "translate(-50%, -50%) scaleY(-1)" } : {}}
      />
      <div className={`absolute inset-0 ${overlayClass}`} />
    </div>
  );
}
