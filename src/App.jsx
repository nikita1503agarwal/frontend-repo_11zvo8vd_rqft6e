import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DesignTokens from "./components/DesignTokens";
import PrototypeShowcase from "./components/PrototypeShowcase";

export default function App() {
  return (
    <div className="min-h-screen bg-[#E9D8C1]">
      <Navbar />
      <main>
        <Hero />
        <DesignTokens />
        <PrototypeShowcase />

        <section id="prototype" className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-black/5">
            <h3 className="text-2xl font-semibold text-[#1A1A1A]">Interactive Prototype Notes</h3>
            <p className="mt-2 text-[#1A1A1A]/70 max-w-2xl">
              This sandbox showcases the visual language and sample screens. The full Figma file will include
              all 16 tablet frames, components with variants, tokens, and connected flows for capture → visualize → compare → save.
            </p>
            <ul className="mt-4 list-disc pl-5 text-[#1A1A1A]/80 space-y-1">
              <li>Accessible color contrast and focus states</li>
              <li>Rounded corners (12–20px) and soft shadows</li>
              <li>8-pt spacing grid and tablet-first layout</li>
            </ul>
          </div>
        </section>
      </main>
      <footer className="border-t border-black/10 bg-[#E9D8C1]">
        <div className="mx-auto max-w-[1200px] px-6 py-8 text-sm text-[#1A1A1A]/70">
          © {new Date().getFullYear()} StyleMirror — Designed for salon professionals
        </div>
      </footer>
    </div>
  );
}
