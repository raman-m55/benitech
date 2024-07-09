import AdminPanelNavbar from "@/components/modules/adminNavbar";
import DashboardTemplate from "@/components/templates/dashboardPage";
import React from "react";

function Dashboard() {
  return (
    <>
      <AdminPanelNavbar />
      <DashboardTemplate/>
    </>
  );
}

export default Dashboard;