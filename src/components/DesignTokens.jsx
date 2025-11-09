export default function DesignTokens() {
  const swatches = [
    { name: "Primary Gold", hex: "#C9A86A" },
    { name: "Secondary Copper", hex: "#A67C52" },
    { name: "Surface Charcoal", hex: "#2E2E2E" },
    { name: "Background Beige", hex: "#E9D8C1" },
    { name: "Text Light", hex: "#FFFFFF" },
    { name: "Text Dark", hex: "#1A1A1A" },
  ];

  const typeScale = [
    { label: "H1", classes: "text-4xl md:text-5xl font-semibold" },
    { label: "H2", classes: "text-3xl md:text-4xl font-semibold" },
    { label: "H3", classes: "text-2xl md:text-3xl font-semibold" },
    { label: "Body", classes: "text-base" },
    { label: "Caption", classes: "text-sm text-black/70" },
  ];

  return (
    <section id="design" className="mx-auto max-w-[1200px] px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A]">Design System Tokens</h2>
      <p className="mt-2 text-[#1A1A1A]/70 max-w-2xl">
        Core color palette and typography scale used across the tablet prototype.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-black/5">
          <h3 className="font-medium text-[#1A1A1A]">Colors</h3>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {swatches.map((s) => (
              <div key={s.hex} className="rounded-xl overflow-hidden border border-black/5">
                <div className="h-16" style={{ backgroundColor: s.hex }} />
                <div className="p-3 text-xs">
                  <p className="font-medium text-[#1A1A1A]">{s.name}</p>
                  <p className="text-[#1A1A1A]/70">{s.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm border border-black/5 md:col-span-2">
          <h3 className="font-medium text-[#1A1A1A]">Typography</h3>
          <div className="mt-4 space-y-3">
            {typeScale.map((t) => (
              <div key={t.label} className="border border-black/5 rounded-xl px-4 py-3">
                <div className={t.classes + " text-[#1A1A1A]"}>{t.label} – Poppins/Inter</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
