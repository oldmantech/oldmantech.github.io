"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  slug: string;
  title: string;
  status: "active" | "coming-soon";
  blurb: string;
  category: string;
  href?: string;
  cta?: string;
};

const projects: Project[] = [
  {
    slug: "crt-drive",
    title: "CRT Drive",
    status: "active",
    category: "Modern Retro · Old Iron",
    blurb:
      "Open firmware for 1990s terminal CRTs — Raspberry Pi Pico replaces the sealed drive ASIC while sync, dual video, and deflection stay in the chassis.",
    href: "https://github.com/fractalclockwork/crt-drive",
    cta: "Open the repo",
  },
  {
    slug: "core-memory",
    title: "Core memory",
    status: "coming-soon",
    category: "Old Iron",
    blurb:
      "Magnetic core plane experiments and readout notes. Schematics and build log will land here when the first board is stable enough to share.",
  },
  {
    slug: "plus4-fpga",
    title: "Commodore Plus/4 FPGA expansion",
    status: "coming-soon",
    category: "Retro-Modern",
    blurb:
      "An FPGA expansion path for the Plus/4 — modern fabric next to TED-era silicon. Repo and pinout docs are not public yet.",
  },
  {
    slug: "opamp-computer",
    title: "Op-amp analog computers",
    status: "coming-soon",
    category: "Old Iron · Coding Like It’s 1999",
    blurb:
      "Several small analog computing benches using discrete op-amps. Coming soon as separate build logs once the first problem set is reproducible.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ContentSections() {
  return (
    <>
      <section
        id="projects"
        className="relative border-t border-phosphor/10 px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
          >
            <p className="font-tech text-[11px] tracking-[0.28em] text-filament uppercase">
              Project gateway
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Entries on the bench
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
              Start here, then follow each repo as it grows. Unfinished work
              stays marked honestly — no fake demos, no placeholder glory.
            </p>
          </motion.div>

          <ol className="mt-14 space-y-0 divide-y divide-phosphor/12 border-y border-phosphor/12">
            {projects.map((project, index) => (
              <motion.li
                key={project.slug}
                className="grid gap-4 py-8 sm:grid-cols-[4.5rem_1fr_auto] sm:items-start sm:gap-8"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={reveal}
                transition={{ delay: index * 0.05 }}
              >
                <span className="font-tech text-sm tracking-[0.2em] text-phosphor/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                      {project.title}
                    </h3>
                    {project.status === "coming-soon" ? (
                      <span className="font-tech text-[10px] tracking-[0.22em] text-filament uppercase">
                        Coming soon
                      </span>
                    ) : (
                      <span className="font-tech text-[10px] tracking-[0.22em] text-phosphor uppercase">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="mt-1 font-tech text-[11px] tracking-[0.14em] text-steel/80 uppercase">
                    {project.category}
                  </p>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-steel">
                    {project.blurb}
                  </p>
                  {project.status === "coming-soon" && (
                    <p className="mt-3 font-tech text-xs tracking-[0.08em] text-steel/70">
                      No public repo yet — this slot will link when the first
                      docs ship.
                    </p>
                  )}
                </div>
                <div className="sm:pt-1">
                  {project.href ? (
                    <Button
                      nativeButton={false}
                      render={
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                      size="lg"
                      className="h-10 rounded-md bg-phosphor px-4 font-tech text-[11px] tracking-[0.16em] text-primary-foreground uppercase hover:bg-phosphor-bright"
                    >
                      {project.cta ?? "Open"}
                      <ArrowUpRight data-icon="inline-end" />
                    </Button>
                  ) : (
                    <span
                      className="inline-flex h-10 items-center rounded-md border border-phosphor/15 px-4 font-tech text-[11px] tracking-[0.16em] text-steel/55 uppercase"
                      aria-disabled="true"
                    >
                      Not published
                    </span>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="contest"
        className="relative border-t border-phosphor/10 px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
          >
            <p className="font-tech text-[11px] tracking-[0.28em] text-filament uppercase">
              Hackaday.io
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Retrocomputing Contest
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
              DigiKey-sponsored challenge across Old Iron, Modern Retro,
              Retro-Modern, and Coding Like It’s 1999. These pages exist so
              judges and builders can follow the work — not just see a finished
              photo.
            </p>
            <div className="mt-8">
              <Button
                nativeButton={false}
                render={
                  <a
                    href="https://hackaday.io/contest/206399-retrocomputing-contest"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                size="lg"
                variant="outline"
                className="h-11 rounded-md border-phosphor/25 bg-transparent px-5 font-tech text-xs tracking-[0.18em] text-phosphor uppercase hover:bg-phosphor/10 hover:text-phosphor-bright"
              >
                Official contest page
                <ArrowUpRight data-icon="inline-end" />
              </Button>
            </div>
          </motion.div>

          <motion.aside
            className="border-l border-phosphor/20 pl-6 sm:pl-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
          >
            <p className="font-tech text-[11px] tracking-[0.2em] text-steel uppercase">
              How to follow along
            </p>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-steel">
              <li>1. Start with CRT Drive — hardware and firmware are public.</li>
              <li>2. Watch this hub for core memory, Plus/4 FPGA, and op-amp benches.</li>
              <li>3. Per-project repos will live under the oldmantech org as they open.</li>
            </ul>
          </motion.aside>
        </div>
      </section>
    </>
  );
}
