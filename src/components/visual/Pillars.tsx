import { IconBell, IconLink, IconRadar } from "./icons";

const items = [
  { n: "01", Icon: IconLink, label: "Conexão" },
  { n: "02", Icon: IconRadar, label: "Monitoramento" },
  { n: "03", Icon: IconBell, label: "Alertas" },
];

export function PillarsDiagram() {
  return (
    <div className="mb-8 overflow-hidden rounded-3xl bg-forest px-4 py-8 text-white">
      <svg viewBox="0 0 720 140" className="mx-auto hidden w-full max-w-3xl md:block" role="img">
        <title>Três pilares da MaxFood: conexão, monitoramento e alertas</title>
        <line x1="130" y1="56" x2="590" y2="56" stroke="#6fbf3b" strokeWidth="2" strokeDasharray="6 6" />
        {items.map((item, i) => {
          const x = 130 + i * 230;
          return (
            <g key={item.n} transform={`translate(${x}, 56)`}>
              <circle r="36" fill="#0f3d28" stroke="#6fbf3b" strokeWidth="2" />
              <text
                y="6"
                textAnchor="middle"
                fill="#6fbf3b"
                fontSize="18"
                fontWeight="800"
              >
                {item.n}
              </text>
              <text
                y="68"
                textAnchor="middle"
                fill="#fff"
                fontSize="14"
                fontWeight="700"
              >
                {item.label}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="flex justify-center gap-6 md:hidden">
        {items.map(({ n, Icon, label }) => (
          <div key={n} className="flex flex-col items-center gap-2">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-lime/50">
              <Icon className="h-6 w-6 text-lime" />
            </span>
            <span className="text-xs font-bold">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
