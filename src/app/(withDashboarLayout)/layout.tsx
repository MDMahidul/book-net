import Sidebar from "@/components/ui/Sidebar";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
};

export default DashboardLayout;
