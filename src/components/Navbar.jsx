import { Camera, Settings, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-[#2E2E2E] text-white/90">
      <div className="mx-auto max-w-[1200px] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-[#C9A86A] flex items-center justify-center shadow-md" aria-hidden>
            <Camera className="h-5 w-5 text-[#1A1A1A]" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-white tracking-wide">StyleMirror</p>
            <p className="text-xs text-white/70">See it before you style it</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#prototype" className="text-sm hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A] rounded-md px-1">
            Prototype
          </a>
          <a href="#design" className="text-sm hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A] rounded-md px-1">
            Design System
          </a>
          <a href="#screens" className="text-sm hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A] rounded-md px-1">
            Screens
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button aria-label="Settings" className="p-2 rounded-lg hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A]">
            <Settings className="h-5 w-5 text-white/90" />
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 bg-white text-[#1A1A1A] px-3 py-2 rounded-xl font-medium shadow-sm hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A]">
            <User className="h-4 w-4" />
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
