"use client";

import { Button } from "@/components/ui/button";
import { WorkshopField } from "@/components/workshop-field";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 + i * 0.11,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <WorkshopField />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col px-5 pt-6 pb-16 sm:px-8 sm:pt-8">
        <motion.header
          className="flex items-center justify-between gap-4"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="#top"
            className="font-tech text-[11px] tracking-[0.28em] text-steel uppercase transition-colors hover:text-phosphor"
          >
            oldmantech
          </a>
          <nav className="flex items-center gap-5" aria-label="Main">
            <a
              href="#projects"
              className="hidden font-tech text-[11px] tracking-[0.2em] text-steel uppercase transition-colors hover:text-phosphor sm:inline"
            >
              Projects
            </a>
            <a
              href="#contest"
              className="hidden font-tech text-[11px] tracking-[0.2em] text-steel uppercase transition-colors hover:text-phosphor md:inline"
            >
              Contest
            </a>
            <a
              href="https://github.com/oldmantech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-tech text-[11px] tracking-[0.2em] text-steel uppercase transition-colors hover:text-phosphor"
            >
              GitHub
            </a>
          </nav>
        </motion.header>

        <div className="flex flex-1 flex-col justify-end gap-7 pt-24 sm:justify-center sm:pt-8 lg:max-w-2xl">
          <motion.p
            className="font-display text-[clamp(3.2rem,11vw,6.8rem)] leading-[0.88] font-bold tracking-[-0.04em] text-phosphor phosphor-glow"
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
          >
            Old Man Tech
          </motion.p>

          <motion.h1
            className="max-w-xl font-display text-[clamp(1.3rem,3.2vw,2rem)] leading-tight font-medium tracking-tight text-foreground text-balance"
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
          >
            Retrocomputing on the bench — contest entries you can follow.
          </motion.h1>

          <motion.p
            className="max-w-md text-base leading-relaxed text-steel sm:text-lg"
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
          >
            A portfolio hub for Hackaday Retrocomputing Contest builds: CRT
            Drive first, then core memory, Plus/4 FPGA, and op-amp machines as
            they leave the notebook.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3 pt-1"
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
          >
            <Button
              nativeButton={false}
              render={<a href="#projects" />}
              size="lg"
              className="h-11 rounded-md bg-phosphor px-5 font-tech text-xs tracking-[0.18em] text-primary-foreground uppercase hover:bg-phosphor-bright"
            >
              Browse projects
            </Button>
            <Button
              nativeButton={false}
              render={
                <a
                  href="https://hackaday.io/contest/206399-retrocomputing-contest"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-phosphor/25 bg-transparent px-5 font-tech text-xs tracking-[0.18em] text-phosphor uppercase hover:bg-phosphor/10 hover:text-phosphor-bright"
            >
              Contest brief
              <ArrowUpRight data-icon="inline-end" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
