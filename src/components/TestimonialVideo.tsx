import { useCallback, useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../lib/motion";

type WebkitVideo = HTMLVideoElement & {
  webkitEnterFullscreen?: () => void;
};

export function TestimonialVideo() {
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [wide, setWide] = useState(false);

  const sync = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    setPlaying(!video.paused);
    setMuted(video.muted);
  }, []);

  useEffect(() => {
    const onFs = () => setWide(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion()) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = true;
          void video.play().then(sync).catch(() => undefined);
        }
      },
      { threshold: 0.45 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [sync]);

  async function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      await video.play().catch(() => undefined);
    } else {
      video.pause();
    }
    sync();
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    if (!video.muted && video.paused) void video.play().catch(() => undefined);
    sync();
  }

  async function zoom() {
    const video = videoRef.current as WebkitVideo | null;
    const stage = stageRef.current;
    if (!video) return;

    const nativeFs = document.fullscreenElement;
    if (nativeFs) {
      await document.exitFullscreen().catch(() => undefined);
      setWide(false);
      return;
    }

    video.muted = false;
    await video.play().catch(() => undefined);
    sync();

    if (stage && stage.requestFullscreen) {
      try {
        await stage.requestFullscreen();
        setWide(true);
        return;
      } catch {
        /* iPhone cai no webkit */
      }
    }

    video.webkitEnterFullscreen?.();
  }

  return (
    <div ref={stageRef} className="mf-video-stage">
      <video
        ref={videoRef}
        className="mf-video-el"
        src="/depoimento.mp4"
        poster="/depoimento-poster.jpg"
        playsInline
        muted={muted}
        preload="metadata"
        onPlay={sync}
        onPause={sync}
        onVolumeChange={sync}
        onClick={togglePlay}
      >
        Seu navegador não reproduz este vídeo.
      </video>

      {!playing ? (
        <button
          type="button"
          className="mf-video-play"
          onClick={togglePlay}
          aria-label="Reproduzir depoimento"
        >
          <span className="mf-video-play-icon" aria-hidden />
        </button>
      ) : null}

      <div className="mf-video-bar">
        <button type="button" onClick={toggleMute}>
          {muted ? "Ativar som" : "Som ligado"}
        </button>
        <button type="button" onClick={zoom}>
          {wide ? "Sair da tela cheia" : "Zoom"}
        </button>
      </div>
    </div>
  );
}
