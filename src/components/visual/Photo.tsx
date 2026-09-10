type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  overlay?: "forest" | "soft" | "none";
};

export function Photo({ src, alt, className = "", overlay = "none" }: PhotoProps) {
  return (
    <div className={`relative overflow-hidden bg-forest/10 ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      {overlay === "forest" ? (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest via-forest/35 to-forest/10" />
      ) : null}
      {overlay === "soft" ? (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
      ) : null}
    </div>
  );
}
