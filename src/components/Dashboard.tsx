import { useRouter } from "next/navigation";
import React, { FC } from "react";
import UserList from "./UserList";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  const router = useRouter();

  console.log(router);
  return (
    <div>
      <UserList />
    </div>
  );
};

export default Dashboard;
