// app/components/hero-amourui.tsx
'use client';

import { easeOut, motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BadgeCheck, Hand, Puzzle } from 'lucide-react';
import Link from 'next/link';

const container = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, ease: easeOut, duration: 0.5 },
  },
};

const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };

export function HeroAmourUI() {
  return (
    <section className="relative overflow-hidden h-screen">
      {/* Background layers */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            // Base vertical gradient (navy -> near-black)
            'linear-gradient(180deg, #0C1331 0%, #0A1028 55%, #070B1A 100%)',
        }}
      />
      {/* Top-center blue halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 480px at 50% -10%, rgba(60, 88, 200, 0.35) 0%, rgba(12, 19, 49, 0) 60%)',
        }}
      />
      {/* Soft purple glow behind title */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(520px 220px at 50% 33%, rgba(139, 92, 246, 0.28) 0%, rgba(139, 92, 246, 0) 65%)',
        }}
      />
      {/* Subtle bottom vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(900px 320px at 50% 110%, rgba(0, 0, 0, 0.5) 0%, rgba(0,0,0,0) 65%)',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative h-full mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pb-16 pt-20 text-center md:pt-24"
      >
        {/* Trust badge */}
        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/80 backdrop-blur"
        >
          <BadgeCheck className="h-3.5 w-3.5 text-white/70" />
          Trusted by 1,000+ developers
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Bring Life to Your UI with{' '}
          <span className="bg-gradient-to-r from-[#7A7CFF] via-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
            AmourUI
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={item}
          className="mt-5 max-w-2xl text-balance text-base/7 text-white/70 sm:text-lg/8"
        >
          Beautifully crafted animated UI components and hero sections for modern web apps.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/components">  
            <Button size="lg" className="h-11 rounded-full px-6 text-base shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] bg-[#6D6FFF] hover:bg-[#6366F1] cursor-pointer">
              Explore Components
            </Button>
          </Link>
          <Button size="lg" variant="secondary" className="h-11 rounded-full px-6 text-base border-white/15  text-white bg-[#6D6FFF] hover:bg-[#6366F1] cursor-pointer">
            Explore Hero Pages
          </Button>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={container}
          className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          <motion.div variants={item}>
            <Card className="group h-full border-white/10 bg-white/[0.04] p-6 text-left text-white transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30 shadow-inner">
                <Puzzle className="h-5 w-5 text-white/80" />
              </div>
              <div className="font-medium">Animated Hero Sections</div>
            </Card>
          </motion.div>
          <motion.div variants={item}>
            <Card className="group h-full border-white/10 bg-white/[0.04] p-6 text-left text-white transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30 shadow-inner">
                <Hand className="h-5 w-5 text-white/80" />
              </div>
              <div className="font-medium">Interactive Components</div>
            </Card>
          </motion.div>
          <motion.div variants={item}>
            <Card className="group h-full border-white/10 bg-white/[0.04] p-6 text-left text-white transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30 shadow-inner">
                <BadgeCheck className="h-5 w-5 text-white/80" />
              </div>
              <div className="font-medium">Smooth Integrations</div>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
