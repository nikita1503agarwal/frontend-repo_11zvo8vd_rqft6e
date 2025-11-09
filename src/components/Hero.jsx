import Spline from "@splinetool/react-spline";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/placeholder/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:py-36 lg:py-40 grid md:grid-cols-2 gap-10">
        <div className="backdrop-blur-sm/0">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1 text-xs md:text-sm border border-white/15">
            <Sparkles className="h-3.5 w-3.5" /> AI-powered salon assistant
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-sm">
            Visualize hairstyles in real-time
          </h1>
          <p className="mt-4 text-white/85 text-lg max-w-xl">
            Capture, experiment, and show before/after previews so clients can approve with confidence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#screens"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#C9A86A] text-[#1A1A1A] px-5 py-3 font-medium shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C9A86A] focus-visible:ring-offset-[#2E2E2E]"
            >
              Open Prototype <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#design"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 text-white px-5 py-3 font-medium backdrop-blur-sm border border-white/15 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A]"
            >
              View Design System
            </a>
          </div>
        </div>

        <div className="bg-[#E9D8C1]/90 text-[#1A1A1A] rounded-3xl p-6 md:p-8 shadow-2xl self-start">
          <div className="flex items-center justify-between">
            <p className="font-semibold">StyleMirror</p>
            <span className="text-xs text-[#2E2E2E]">Tablet UI Preview</span>
          </div>
          <div className="mt-4 aspect-[4/3] rounded-2xl bg-[#2E2E2E] grid place-items-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop"
              alt="Salon preview"
              className="h-full w-full object-cover opacity-70"
            />
          </div>
          <ul className="mt-5 text-sm space-y-1 text-[#1A1A1A]/80">
            <li>• Minimal, elegant, salon-professional aesthetic</li>
            <li>• WCAG-aware color and focus states</li>
            <li>• Tablet-first, large touch targets</li>
          </ul>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
    </section>
  );
}
