'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Badge, Box, BoxSelect, Braces, GitBranch, Home, List, Section, Square, Wand2 } from 'lucide-react';
import Link from 'next/link';

const ungrouped = [
  { title: 'Overview', href: '#', icon: Home },
];

const buttons = [
  { title: 'Primary', href: '#', icon: Square },
  { title: 'Secondary', href: '#', icon: Square },
  { title: 'Ghost', href: '#', icon: Square },
  { title: 'Outline', href: '#', icon: Square },
  { title: 'Icon', href: '#', icon: Wand2 },
];

const cards = [
  { title: 'Basic', href: '#', icon: Box },
  { title: 'With Image', href: '#', icon: BoxSelect },
  { title: 'Pricing', href: '#', icon: Badge },
  { title: 'Layout Card', href: '/components/layout-card', icon: Badge },
];

const misc = [
  { title: 'Parallax Section', href: '/components/parallax-section', icon: Section},
  { title: 'Accordion', href: '#', icon: List },
  { title: 'Navigation', href: '#', icon: GitBranch },
  { title: 'Code Blocks', href: '#', icon: Braces },
];

export function ComponentSidebar() {
  return (
    <Sidebar collapsible="icon" side="left"  className="component-sidebar overflow-x-hidden box-border border-r border-white/50">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #0C1331 0%, #0A1028 55%, #070B1A 100%)',
        }}
      />
      <SidebarHeader className="px-3 py-3 relative z-10">
        {/* Workspace / logo + mobile trigger */}
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-tight text-white">AmourUI</span>
          <div className="ml-auto lg:hidden">
            <SidebarTrigger className="h-8 w-8 rounded-md bg-white/80" />
          </div>
        </div>
        {/* Search */}
        {/* <div className="mt-3">
          <div className="flex items-center rounded-md border border-white bg-white px-2 py-1.5 text-sm text-white">
            <Blocks className="mr-2 size-4 opacity-60" />
            <input
              className="flex-1 bg-white outline-none placeholder:text-white/40"
              placeholder="Search components"
              aria-label="Search components"
            />
            <kbd className="ml-2 inline-flex items-center rounded bg-white px-1.5 py-0.5 text-[10px] font-medium text-white">
              ⌘K
            </kbd>
          </div>
        </div> */}
      </SidebarHeader>


      <SidebarContent className="px-2">
        {/* Ungrouped items */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {ungrouped.map((i) => (
                <SidebarMenuItem key={i.title}>
                  <SidebarMenuButton asChild className='text-white'>
                    <Link href={i.href}>
                      <i.icon className="size-4" />
                      <span>{i.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Buttons group */}
        <SidebarGroup className="">
          <SidebarGroupLabel className="font-medium uppercase tracking-wider text-white">
            Buttons
          </SidebarGroupLabel>
          <div className="relative pl-3 before:absolute before:inset-y-2 before:left-2 before:w-px before:bg-white/50">
            <SidebarGroupContent>
              <SidebarMenu>
                {buttons.map((i) => (
                  <SidebarMenuItem key={i.title}>
                    <SidebarMenuButton asChild className='text-white'>
                      <Link href={i.href}>
                        <i.icon className="size-4" />
                        <span>{i.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </div>
        </SidebarGroup>

        {/* Cards group */}
        <SidebarGroup className="">
          <SidebarGroupLabel className="font-medium uppercase tracking-wider text-white">
            Cards
          </SidebarGroupLabel>
          <div className="relative pl-3 before:absolute before:inset-y-2 before:left-2 before:w-px before:bg-white/50">
            <SidebarGroupContent>
              <SidebarMenu>
                {cards.map((i) => (
                  <SidebarMenuItem key={i.title}>
                    <SidebarMenuButton asChild className='text-white'>
                      <Link href={i.href}>
                        <i.icon className="size-4" />
                        <span>{i.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </div>
        </SidebarGroup>

        {/* Another non-collapsible group */}
        <SidebarGroup className="">
          <SidebarGroupLabel className="font-medium uppercase tracking-wider text-white">
            Misc
          </SidebarGroupLabel>
          <div className="relative pl-3 before:absolute before:inset-y-2 before:left-2 before:w-px before:bg-white/50">
            <SidebarGroupContent>
              <SidebarMenu>
                {misc.map((i) => (
                  <SidebarMenuItem key={i.title}>
                    <SidebarMenuButton asChild className='text-white'>
                      <Link href={i.href}>
                        <i.icon className="size-4" />
                        <span>{i.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
