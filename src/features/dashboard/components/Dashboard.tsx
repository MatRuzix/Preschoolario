import React from "react";

import DashboardTile from "./DashboardTile";

const Dashboard = () => {
  return (
    <div id="dashboard" className="flex w-full h-full text-white">
      <div className="flex w-full h-1/3 bg-slate-300">
        <DashboardTile color="green" title="Dzieci obecne" data={20} />
        <DashboardTile color="orange" title="Dzieci nieobecne" data={3} />
        <DashboardTile
          color="yellow"
          title="Wydarzenia w tym miesiącu"
          data={2}
        />
        <DashboardTile color="red" title="Zaległe płatności" data={6} />
      </div>
    </div>
  );
};

export default Dashboard;
