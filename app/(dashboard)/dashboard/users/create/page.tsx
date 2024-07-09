import AdminPanelNavbar from "@/components/modules/adminNavbar";
import DashboardCreateUserTemplate from "@/components/templates/dashboardPage/users/create";
import React from "react";

function DashboardCreateUserPage() {
  return (
    <>
      <AdminPanelNavbar />
      <DashboardCreateUserTemplate />
    </>
  );
}

export default DashboardCreateUserPage;
