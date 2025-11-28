"use client";

import * as React from "react";
import {
  LayoutDashboard,
  Users,
  FileText,
  Receipt,
  Settings,
  Sparkles,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "@/components/dashboard/nav-main";
import { NavUser } from "@/components/dashboard/nav-user";
import { appConfig } from "@/lib/config";

const data = {
  navMain: [
    {
      title: "Tableau de bord",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Clients",
      url: "/dashboard/customers",
      icon: Users,
    },
    {
      title: "Devis",
      url: "/dashboard/quotes",
      icon: FileText,
    },
    {
      title: "Factures",
      url: "/dashboard/invoices",
      icon: Receipt,
    },
    {
      title: "Paramètres",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/dashboard">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary/90 to-primary/70 dark:from-black/50 dark:to-primary/40">
                  <Sparkles className="h-4 w-4 text-secondary dark:text-primary" />
                </div>
                <span className="text-base font-semibold">{appConfig.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}

