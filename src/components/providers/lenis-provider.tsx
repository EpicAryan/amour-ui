
'use client';

import { createContext, useContext, useEffect, useRef, type ReactNode } from 'react';
import Lenis from 'lenis';
import { useAnimationFrame } from 'motion/react';
import { usePathname } from 'next/navigation';
import 'lenis/dist/lenis.css';


interface ScrollToOptions {
  offset?: number;
  lerp?: number;
  duration?: number;
  easing?: (t: number) => number;
  immediate?: boolean;
  lock?: boolean;
  force?: boolean;
  onComplete?: () => void;
  userData?: Record<string, unknown>;
}

type Ctx = {
  lenis: Lenis | null;
  scrollTo: (target: number | string | HTMLElement, options?: ScrollToOptions) => void;
};

const LenisContext = createContext<Ctx>({ lenis: null, scrollTo: () => {} });

export function useLenis() {
  return useContext(LenisContext);
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    lenisRef.current = new Lenis({
      autoRaf: false,
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      anchors: true, 
    });

    return () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  useAnimationFrame((time) => {
    lenisRef.current?.raf(time);
  });

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  const value: Ctx = {
    lenis: lenisRef.current,
    scrollTo: (target, options) => {
      lenisRef.current?.scrollTo(target, options);
    },
  };

  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}
