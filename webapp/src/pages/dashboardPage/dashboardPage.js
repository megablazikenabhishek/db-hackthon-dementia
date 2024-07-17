import React from "react";
import DashboardHeader from "../../components/dashboardHeader/dashboardHeader";
import BottomNav from "../../components/bottomNav/bottomNav";
import DashboardBody from "../../components/dashboardBody/dashboardBody";

function DashboardPage(params) {
    return (
        <div className="bg-[#F7F7F7]">
            <DashboardHeader/>
            <DashboardBody/>
            <BottomNav/>
        </div>
    );
}

export default DashboardPage;