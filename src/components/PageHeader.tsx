import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
};

export default function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#1e3a5f] to-[#0f1e35] text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #3b82f6 0, transparent 40%), radial-gradient(circle at 80% 70%, #06b6d4 0, transparent 40%)",
        }}
      />
      <div className="container-page relative py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-200">
            {eyebrow}
          </span>
          <h1
            className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
            style={{ wordBreak: "keep-all" }}
          >
            {title}
          </h1>
          {description && (
            <p
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
              style={{ wordBreak: "keep-all" }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
