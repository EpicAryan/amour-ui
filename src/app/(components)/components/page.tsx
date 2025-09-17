// components/ComponentPage.tsx
import React from 'react';
import { Badge, Box, Layers, Palette, Sparkles, Zap } from 'lucide-react';

const componentCategories = [
  {
    title: 'Buttons',
    description: 'Interactive button components with various styles and states',
    count: 5,
    icon: Zap,
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: 'Cards',
    description: 'Flexible card layouts for content organization',
    count: 3,
    icon: Box,
    color: 'from-purple-400 to-purple-600',
  },
  {
    title: 'Navigation',
    description: 'Navigation components for seamless user experience',
    count: 4,
    icon: Layers,
    color: 'from-green-400 to-green-600',
  },
  {
    title: 'Form Elements',
    description: 'Input fields, selectors, and form controls',
    count: 8,
    icon: Palette,
    color: 'from-orange-400 to-orange-600',
  },
  {
    title: 'Data Display',
    description: 'Tables, lists, and data visualization components',
    count: 6,
    icon: Badge,
    color: 'from-pink-400 to-pink-600',
  },
  {
    title: 'Feedback',
    description: 'Alerts, toasts, and notification components',
    count: 4,
    icon: Sparkles,
    color: 'from-indigo-400 to-indigo-600',
  },
];

const ComponentPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(1200px 480px at 50% -10%, rgba(60, 88, 200, 0.25) 0%, rgba(12, 19, 49, 0) 60%)',
        }}
      />

      {/* Content - Full Width */}
      <div className="relative z-10 w-full px-6 py-12 lg:px-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Component{' '}
            <span className="bg-gradient-to-r from-[#7A7CFF] via-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
              Library
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-white/70">
            Explore our collection of beautifully crafted, animated UI components designed for modern web applications.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
            <div className="text-3xl font-bold text-white">30+</div>
            <div className="text-sm text-white/60">Components</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
            <div className="text-3xl font-bold text-white">6</div>
            <div className="text-sm text-white/60">Categories</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-sm text-white/60">Responsive</div>
          </div>
        </div>

        {/* Component Categories Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
          {componentCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/8 hover:shadow-2xl backdrop-blur"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                  <category.icon className="h-6 w-6 text-white/80" />
                </div>

                {/* Content */}
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/70">
                    {category.count}
                  </span>
                </div>
                
                <p className="text-sm text-white/60 mb-4">{category.description}</p>

                {/* Explore link */}
                <div className="flex items-center text-sm text-white/80 group-hover:text-white">
                  <span>Explore components</span>
                  <svg 
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Start Section */}
        <div className="mt-20 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">Ready to get started?</h2>
            <p className="mb-6 text-white/70">
              Choose a component category from the sidebar or browse our complete collection.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-[#6D6FFF] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6366F1]">
                Browse All Components
              </button>
              <button className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentPage;
