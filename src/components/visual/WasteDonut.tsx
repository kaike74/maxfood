const R = 54;
const C = 2 * Math.PI * R;
const PCT = 0.36;

export function WasteDonut() {
  const dash = C * PCT;
  const gap = C - dash;

  return (
    <figure className="flex items-center gap-5 rounded-3xl border border-emerald-100 bg-white p-6">
      <svg viewBox="0 0 160 160" className="h-36 w-36 shrink-0" role="img">
        <title>36% do desperdício de alimentos no Brasil é por validade</title>
        <circle cx="80" cy="80" r={R} fill="none" stroke="#e8f6e3" strokeWidth="16" />
        <circle
          cx="80"
          cy="80"
          r={R}
          fill="none"
          stroke="#6fbf3b"
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${gap}`}
          transform="rotate(-90 80 80)"
        />
        <circle
          cx="80"
          cy="80"
          r={R}
          fill="none"
          stroke="#0f3d28"
          strokeWidth="16"
          strokeDasharray={`${gap * 0.15} ${C}`}
          strokeDashoffset={-dash}
          transform="rotate(-90 80 80)"
        />
        <text
          x="80"
          y="76"
          textAnchor="middle"
          className="fill-forest"
          fontSize="32"
          fontWeight="800"
        >
          36%
        </text>
        <text
          x="80"
          y="96"
          textAnchor="middle"
          className="fill-leaf"
          fontSize="11"
          fontWeight="700"
        >
          validade
        </text>
      </svg>
      <figcaption className="text-sm text-ink/70">
        <strong className="block text-base font-extrabold text-forest">
          Do desperdício no Brasil
        </strong>
        <span className="mt-1 block">
          Sai da prateleira para o lixo por data — não por falta de fome.
        </span>
      </figcaption>
    </figure>
  );
}
