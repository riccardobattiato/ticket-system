import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";
import { AppSidebar } from "./sidebar";
import { SiteHeader } from "./header";

export default function TicketsLayout(pageProps: PropsWithChildren) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader title="Tickets" />
        <div className="p-4 lg:p-6">{pageProps.children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
