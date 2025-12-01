"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { BarChart3, BookOpen, LogOut } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { useLogoutMutation } from "@/queries/auth.queries";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Thống kê",
    url: "/manage/dashboard",
    icon: BarChart3,
  },
  {
    title: "Quản lý câu chuyện",
    url: "/manage/stories",
    icon: BookOpen,
  },
];

export function AdminSidebar() {
  const logoutMutation = useLogoutMutation();
  const { logout: authLogout } = useAuth();
  const { state } = useSidebar();
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
      authLogout();
      window.location.href = "/admin/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Sidebar
      collapsible="icon"
      className="border-white/10 bg-slate-900 backdrop-blur-xl"
    >
      <SidebarHeader className="flex items-center border-b border-white/10 pb-4">
        {state === "collapsed" ? (
          <SidebarTrigger className="hover:bg-white/10 focus-visible:ring-0 focus-visible:ring-offset-0" />
        ) : (
          <div className="flex flex-row gap-8 items-center">
            <Image src="/assets/icon.png" alt="Logo" width={120} height={80} />
            <SidebarTrigger className="hover:bg-white/10 focus-visible:ring-0 focus-visible:ring-offset-0" />
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="flex justify-center">
        <SidebarGroup>
          <SidebarGroupContent>
            <TooltipProvider>
              <SidebarMenu className="gap-10 items-start group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:justify-center">
                {items.map((item) => {
                  const isActive = pathname === item.url;
                  return (
                    <SidebarMenuItem key={item.title} className="w-full h-full">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton
                            asChild
                            isActive={isActive}
                            className="w-full h-full hover:bg-white/10 focus-visible:ring-0 focus-visible:ring-offset-0 data-[active=true]:bg-blue-600/20 data-[active=true]:text-blue-400"
                          >
                            <Link
                              href={item.url}
                              className="flex items-center gap-2 w-full px-2 py-2 rounded-md justify-start 
                                group-data-[collapsible=icon]:justify-center transition-all duration-200
                                hover:bg-white/10"
                            >
                              <item.icon
                                className="!h-7 !w-7 group-data-[collapsible=icon]:h-7 
                                  group-data-[collapsible=icon]:w-7 transition-all
                                  !shrink-0 !size-auto text-white/90"
                              />
                              <span className="ml-5 group-data-[collapsible=icon]:hidden text-white/90">
                                {item.title}
                              </span>
                            </Link>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <p>{item.title}</p>
                        </TooltipContent>
                      </Tooltip>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </TooltipProvider>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="mt-auto p-4 border-t border-white/10">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleLogout}
                variant="ghost"
                className="w-full justify-start gap-2 hover:bg-red-500/20 hover:text-red-400 text-white/90 group-data-[collapsible=icon]:justify-center"
              >
                <LogOut className="h-5 w-5 group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6" />
                <span className="group-data-[collapsible=icon]:hidden">
                  Đăng xuất
                </span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Đăng xuất</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Sidebar>
  );
}
