"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren, useMemo } from "react";
import { AppSidebar } from "./sidebar";
import { SiteHeader } from "./header";
import { usePathname } from "next/navigation";

export default function TicketsLayout(pageProps: PropsWithChildren) {
  const pathname = usePathname();

  const title = useMemo(() => {
    if (pathname === "/tickets") return "Tickets";
    if (pathname === "/tickets/new") return "Create new ticket";
    if (pathname === "/tickets/users") return "Users list";
    if (pathname.startsWith("/tickets/details/")) return "Ticket details";
    return "Tickets";
  }, [pathname]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader title={title} />
        <div className="p-4 lg:p-6">{pageProps.children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
