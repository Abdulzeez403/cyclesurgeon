import React from "react";
import Sidebar from "./dashboardSlider";
interface IProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-8 bg-gray-100">{children}</main>
    </div>
  );
};

export default DashboardLayout;
