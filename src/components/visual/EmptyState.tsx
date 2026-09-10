import type { ReactNode } from "react";
import { IconEmptyShelf } from "./icons";

export function EmptyState({
  title,
  text,
  action,
}: {
  title: string;
  text: string;
  action?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-emerald-200 bg-white px-6 py-12 text-center">
      <IconEmptyShelf className="mx-auto h-10 w-10 text-leaf" />
      <p className="mt-3 font-bold text-forest">{title}</p>
      <p className="mt-1 text-sm text-ink/60">{text}</p>
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}
