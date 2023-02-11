import { useRouter } from "next/navigation";
import React, { FC } from "react";
import Chat from "./Chat";
import UserList from "./UserList";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  const router = useRouter();

  console.log(router);
  return (
    <div className='flex'>
      <UserList />
      <Chat />
    </div>
  );
};

export default Dashboard;
