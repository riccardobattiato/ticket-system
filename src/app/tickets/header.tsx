import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

type Props = {
  title: string;
};

export function SiteHeader({ title }: Props) {
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{title}</h1>
      </div>
      <div className="px-4 lg:px-6 flex items-center gap-1 lg:gap-2">
        <Link
          className={buttonVariants({ variant: "ghost" })}
          role="button"
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
        >
          <Icons.gitHub className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}
