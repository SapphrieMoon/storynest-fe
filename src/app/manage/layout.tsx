"use client";

import React, { useState } from "react";
import { AdminSidebar } from "@/components/AdminSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function ManageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("admin_sidebar_open");
      if (saved !== null) {
        setSidebarOpen(saved === "true");
      }
    } catch (err) {
      // ignore localStorage errors
    }
  }, []);

  const handleSidebarOpenChange = React.useCallback((open: boolean) => {
    setSidebarOpen(open);
    try {
      localStorage.setItem("admin_sidebar_open", String(open));
    } catch (err) {
      // ignore localStorage errors
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="relative z-10 flex flex-1">
        <SidebarProvider
          open={sidebarOpen}
          onOpenChange={handleSidebarOpenChange}
        >
          <AdminSidebar />
          <SidebarInset className="bg-slate-950 border-0">
            <main className="flex-1 p-6">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
}
