type IconProps = { className?: string; title?: string };

const svg = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconLink({ className, title }: IconProps) {
  return (
    <svg {...svg} className={className} aria-hidden={!title} role={title ? "img" : undefined}>
      {title ? <title>{title}</title> : null}
      <circle cx="7" cy="12" r="3.2" />
      <circle cx="17" cy="12" r="3.2" />
      <path d="M10 12h4" />
    </svg>
  );
}

export function IconRadar({ className, title }: IconProps) {
  return (
    <svg {...svg} className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path d="M4 19V9l6-5 6 5v10" />
      <path d="M4 19h16" />
      <path d="M9 19v-5h6v5" />
      <path d="M16.5 8.5 20 5" />
    </svg>
  );
}

export function IconBell({ className, title }: IconProps) {
  return (
    <svg {...svg} className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path d="M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 13 6 9Z" />
      <path d="M10 19a2 6 0 0 0 4 0" />
    </svg>
  );
}

export function IconLeaf({ className, title }: IconProps) {
  return (
    <svg {...svg} className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path d="M5 19c8-1 13-7 14-14-7 1-13 6-14 14Z" />
      <path d="M8 16c2-3 5-6 9-8" />
    </svg>
  );
}

export function IconCoins({ className, title }: IconProps) {
  return (
    <svg {...svg} className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <ellipse cx="12" cy="6.5" rx="7" ry="3" />
      <path d="M5 6.5v4c0 1.7 3.1 3 7 3s7-1.3 7-3v-4" />
      <path d="M5 10.5v4c0 1.7 3.1 3 7 3s7-1.3 7-3v-4" />
    </svg>
  );
}

export function IconPeople({ className, title }: IconProps) {
  return (
    <svg {...svg} className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <circle cx="8" cy="8" r="2.4" />
      <circle cx="16.5" cy="9" r="2.1" />
      <path d="M3.5 19c.4-3.2 2.6-5 5.5-5s5.1 1.8 5.5 5" />
      <path d="M13.8 14.2c1.9.2 3.6 1.6 4.2 4.8" />
    </svg>
  );
}

export function IconClock({ className, title }: IconProps) {
  return (
    <svg {...svg} className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.2L15 15" />
    </svg>
  );
}

export function IconCart({ className, title }: IconProps) {
  return (
    <svg {...svg} className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path d="M4 5h2l1.6 9.2a1.5 1.5 0 0 0 1.5 1.3h7.6a1.5 1.5 0 0 0 1.5-1.2L20 8H8" />
      <circle cx="10" cy="20" r="1.2" />
      <circle cx="17" cy="20" r="1.2" />
    </svg>
  );
}

export function IconChef({ className, title }: IconProps) {
  return (
    <svg {...svg} className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path d="M8 10c-2 0-3-1.6-3-3.2C5 5 6.4 4 8 4c.4-1.5 1.6-2.5 3.2-2.5S14.8 2.5 15.2 4c1.6 0 3 1 3 2.8 0 1.6-1 3.2-3 3.2" />
      <path d="M8 10v9.5h8V10" />
      <path d="M10 19.5V14h4v5.5" />
    </svg>
  );
}

export function IconStore({ className, title }: IconProps) {
  return (
    <svg {...svg} className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path d="M4 10 6 5h12l2 5" />
      <path d="M4 10v9h16v-9" />
      <path d="M4 10h16" />
      <path d="M9 19v-6h6v6" />
    </svg>
  );
}

export function IconHotel({ className, title }: IconProps) {
  return (
    <svg {...svg} className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path d="M4 20V7l8-3 8 3v13" />
      <path d="M9 20v-6h6v6" />
      <path d="M8 10h.01M12 10h.01M16 10h.01" />
    </svg>
  );
}

export function IconService({ className, title }: IconProps) {
  return (
    <svg {...svg} className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path d="M4 18h16" />
      <path d="M6 18V9l6-4 6 4v9" />
      <path d="M9 18v-4h6v4" />
    </svg>
  );
}

export function IconArrow({ className, title }: IconProps) {
  return (
    <svg {...svg} className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path d="M4 12h14" />
      <path d="M14 6l6 6-6 6" />
    </svg>
  );
}

export function IconEmptyShelf({ className, title }: IconProps) {
  return (
    <svg {...svg} className={className} aria-hidden={!title}>
      {title ? <title>{title}</title> : null}
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
      <path d="M7 7v2M17 12v2" />
    </svg>
  );
}
