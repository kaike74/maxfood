export function LossVsProfit() {
  return (
    <figure className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-emerald-100">
      <p className="text-xs font-bold uppercase tracking-widest text-leaf">
        O software se paga
      </p>
      <svg viewBox="0 0 360 168" className="mt-4 w-full" role="img">
        <title>R$ 5.000 em perdas evitadas contra R$ 247 de mensalidade</title>
        <rect x="0" y="18" width="360" height="52" rx="10" fill="#e8f6e3" />
        <rect x="0" y="18" width="340" height="52" rx="10" fill="#6fbf3b" />
        <text x="16" y="40" fill="#0f3d28" fontSize="12" fontWeight="700">
          Perdas evitadas
        </text>
        <text x="16" y="58" fill="#0f3d28" fontSize="16" fontWeight="800">
          R$ 5.000
        </text>

        <rect x="0" y="88" width="360" height="52" rx="10" fill="#e8f6e3" />
        <rect x="0" y="88" width="28" height="52" rx="10" fill="#0f3d28" />
        <text x="40" y="110" fill="#0f3d28" fontSize="12" fontWeight="700">
          Mensalidade
        </text>
        <text x="40" y="128" fill="#0f3d28" fontSize="16" fontWeight="800">
          R$ 247
        </text>
      </svg>
      <figcaption className="mt-2 text-sm text-ink/65">
        Um ciclo de validade recuperada cobre o plano Profissional — e sobra margem.
      </figcaption>
    </figure>
  );
}

export function FunnelFlow() {
  return (
    <svg viewBox="0 0 640 120" className="w-full" role="img">
      <title>Funil Produz, MaxFood, Consome</title>
      <defs>
        <linearGradient id="mfFunnel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0f3d28" />
          <stop offset="50%" stopColor="#1f8a3e" />
          <stop offset="100%" stopColor="#6fbf3b" />
        </linearGradient>
      </defs>
      <path
        d="M8 18h180l-18 84H26z"
        fill="#0f3d28"
      />
      <path
        d="M214 28h180l-22 64H236z"
        fill="#1f8a3e"
      />
      <path
        d="M420 38h180l-26 44H446z"
        fill="#6fbf3b"
      />
      <text x="98" y="68" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="800">
        Produz
      </text>
      <text x="304" y="68" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="800">
        MaxFood
      </text>
      <text x="510" y="68" textAnchor="middle" fill="#0f3d28" fontSize="15" fontWeight="800">
        Consome
      </text>
    </svg>
  );
}
