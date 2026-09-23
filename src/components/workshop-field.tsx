"use client";

import { motion } from "framer-motion";

export function WorkshopField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,20,16)_0%,rgba(8,11,8,0.92)_55%,#080b08_100%)]" />

      <div className="absolute inset-0 sm:inset-[5%] sm:rounded-[2.75rem] sm:border sm:border-phosphor/15 sm:bg-glass/70 sm:shadow-[inset_0_0_80px_rgba(111,220,92,0.07)]">
        <div className="absolute inset-0 overflow-hidden sm:rounded-[inherit]">
          <svg
            className="absolute inset-0 h-full w-full animate-grid-pulse opacity-35"
            viewBox="0 0 800 520"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="bench-grid"
                width="40"
                height="26"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 26"
                  fill="none"
                  stroke="rgba(111,220,92,0.32)"
                  strokeWidth="0.6"
                />
              </pattern>
            </defs>
            <rect width="800" height="520" fill="url(#bench-grid)" />
            <rect
              x="28"
              y="28"
              width="744"
              height="464"
              fill="none"
              stroke="rgba(168,255,138,0.4)"
              strokeWidth="1.5"
            />
          </svg>

          <div className="scanlines absolute inset-0 opacity-50" />
          <div className="animate-bloom absolute inset-0 bg-[radial-gradient(circle_at_42%_40%,rgba(111,220,92,0.12),transparent_52%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_70%,rgba(201,164,106,0.08),transparent_45%)]" />
          <div className="animate-sweep absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-phosphor/18 to-transparent" />
        </div>

        <div className="absolute inset-0 sm:rounded-[inherit] sm:shadow-[inset_0_0_60px_rgba(0,0,0,0.65)] sm:ring-1 sm:ring-inset sm:ring-white/5" />
      </div>

      <motion.div
        className="absolute bottom-[10%] left-[10%] hidden font-tech text-[10px] tracking-[0.35em] text-phosphor/45 uppercase sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        Hackaday · Retrocomputing · Bench notes
      </motion.div>
    </div>
  );
}
