import AdminPanelNavbar from "@/components/modules/adminNavbar";
import DashboardUserTemplate from "@/components/templates/dashboardPage/users";
import React from "react";

function DashboardUsersPage() {
  return (
    <>
      <AdminPanelNavbar />
      <DashboardUserTemplate />
    </>
  );
}

export default DashboardUsersPage;
