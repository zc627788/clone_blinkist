import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Drawer from "../common/Drawer";
import { useMyContext } from "@/contexts/CustomContext";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { value } = useMyContext();
  return (
    <div className="bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
      <Drawer isOpen={value} />
    </div>
  );
};

export default Layout;
