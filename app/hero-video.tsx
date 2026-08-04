"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = () => {
      if (document.visibilityState === "hidden" || !video.paused) return;
      void video.play().catch(() => undefined);
    };

    const handleVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay, { once: true });
    window.addEventListener("pageshow", tryPlay);
    document.addEventListener("visibilitychange", handleVisibility);
    document.addEventListener("touchstart", tryPlay, { passive: true, once: true });

    return () => {
      video.removeEventListener("canplay", tryPlay);
      window.removeEventListener("pageshow", tryPlay);
      document.removeEventListener("visibilitychange", handleVisibility);
      document.removeEventListener("touchstart", tryPlay);
    };
  }, []);

  return (
    <>
      <img
        className="hero-mobile-animation"
        src="/media/metamorphosis-mobile-hq-v4.webp"
        alt=""
        aria-hidden="true"
        draggable="false"
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/media/metamorphosis-poster.jpg"
        aria-hidden="true"
        tabIndex={-1}
        disablePictureInPicture
      >
        <source
          media="(min-width: 681px)"
          src="/media/metamorphosis.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
