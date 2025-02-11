import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import MobileNav from "@/components/MobileNav";
import { Toaster } from "@/components/ui/toaster";
export const dynamic = "force-dynamic";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/sign-in");

  return (
    <main className="flex h-screen">
      <Sidebar {...currentUser} />

      <section className="flex h-full flex-1 flex-col">
        <MobileNav {...currentUser} />
        <Header />
        <div className="main-content">{children}</div>
      </section>
<Toaster />
    </main>
  );
};
export default Layout;