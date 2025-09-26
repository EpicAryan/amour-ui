
export type CardInfo = {
  title: string;
  description: string;
  src: string;
  color: string;
};

export const cardsInfo: CardInfo[] = [
  {
    title: "Parallax Scrolling",
    description:
      "Built a smooth parallax scrolling animation in under 10 lines using Motion. The effect adds depth and a dynamic feel to the UI, making content more engaging as users scroll through the page. It’s a simple technique, yet it completely changes how the section feels.",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    color: "#BBACAF",
  },
  {
    title: "React Accordion",
    description:
      "Created a reusable accordion component with clean, modular React code. It allows multiple sections of content to expand and collapse smoothly, improving the overall UX. By keeping the logic reusable, it can be dropped into different projects without extra setup.",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    color: "#A3C9A8",
  },
  {
    title: "Progress Bars",
    description:
      "Dynamic, auto-filling progress bars that animate smoothly on mount. Each bar fills up within a couple of seconds, making it perfect for showcasing progress states, loading indicators, or step-based workflows. Small animations like these make the UI feel alive and responsive.",
    src: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    color: "#EAC435",
  },
  {
    title: "Type vs Interface",
    description:
      "Explained the practical difference between Type and Interface in TypeScript. Both are powerful tools for defining shapes of data, but knowing when to use each helps keep codebases cleaner, more maintainable, and easier to scale in larger projects.",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    color: "#6C5CE7",
  },
  {
    title: "Frontend Fun",
    description:
      "Sharing small but powerful frontend tips that make UI development smoother. From tiny tricks that save hours of debugging to creative animation patterns, these insights aim to make building beautiful, functional interfaces less stressful and more enjoyable.",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    color: "#FF7675",
  },
];
