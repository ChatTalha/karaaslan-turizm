"use client";

import { useEffect, useRef } from "react";

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startVideo = () => {
      video.muted = true;
      video.defaultMuted = true;
      void video.play().catch(() => undefined);
    };

    startVideo();
    video.addEventListener("canplay", startVideo);
    document.addEventListener("visibilitychange", startVideo);

    return () => {
      video.removeEventListener("canplay", startVideo);
      document.removeEventListener("visibilitychange", startVideo);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/images/home/hero-personnel.webp"
      aria-hidden="true"
      tabIndex={-1}
      disablePictureInPicture
    >
      <source src="/videos/karaaslan-hero.mp4" type="video/mp4" />
    </video>
  );
}
