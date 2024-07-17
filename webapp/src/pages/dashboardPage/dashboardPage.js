import React from "react";
import DashboardHeader from "../../components/dashboardHeader/dashboardHeader";
import BottomNav from "../../components/bottomNav/bottomNav";
import DashboardBody from "../../components/dashboardBody/dashboardBody";

function DashboardPage(params) {
    return (
        <>
            <DashboardHeader/>
            <DashboardBody/>
            <BottomNav/>
        </>
    );
}

export default DashboardPage;