import React, { FC } from "react";
import UserList from "./UserList";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  return (
    <div>
      <UserList />
    </div>
  );
};

export default Dashboard;
