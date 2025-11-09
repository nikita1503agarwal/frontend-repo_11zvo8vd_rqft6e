import { ChevronRight, Image, LayoutGrid, SlidersHorizontal } from "lucide-react";

const screens = [
  { id: 1, name: "Splash", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, name: "Login", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop" },
  { id: 8, name: "Canvas", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop" },
  { id: 12, name: "History", img: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop" },
];

export default function PrototypeShowcase() {
  return (
    <section id="screens" className="mx-auto max-w-[1200px] px-6 py-16">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A]">Prototype Preview</h2>
          <p className="mt-2 text-[#1A1A1A]/70 max-w-2xl">
            Tablet-first frames with interactions for capture, visualize, compare, and save.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-[#2E2E2E] text-white px-4 py-2 shadow hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A]">
          Open Figma <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {screens.map((s) => (
          <div key={s.id} className="rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm group">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={s.img} alt={`${s.name} screen`} className="h-full w-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-[#1A1A1A]">{s.id}_{s.name}</p>
                <p className="text-xs text-[#1A1A1A]/70">1024×1366</p>
              </div>
              <div className="flex items-center gap-2 text-[#2E2E2E]">
                <LayoutGrid className="h-4 w-4" />
                <Image className="h-4 w-4" />
                <SlidersHorizontal className="h-4 w-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
