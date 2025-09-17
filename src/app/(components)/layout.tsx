
import { ComponentSidebar } from "@/components/navigation-bars/component-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider
          style={{
            '--sidebar-width': '18rem',
            '--sidebar-width-mobile': '18rem',
          } as React.CSSProperties}
        >
        <ComponentSidebar/>
         <div className="min-h-screen">
            {/* Top bar */}
            <div className="sticky md:hidden top-0 z-20 flex items-center px-4 py-4">
              <SidebarTrigger className="h-8 w-8 rounded-md  border text-black bg-white/80" />
            </div>
            <main className="w-full">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
