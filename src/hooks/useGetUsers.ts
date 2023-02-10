import { UserData, UserList, UserResponse } from "@/types/UserTypes";
import PocketBase, { ClientResponseError } from "pocketbase";
import { useEffect, useState } from "react";

const pb = new PocketBase("http://127.0.0.1:8090");

const useGetUsers = () => {
  const [response, setResponse] = useState<UserList[] | []>([]);
  const [error, setError] = useState<ClientResponseError | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await pb.collection('users').getList(1, 50);        
        setResponse(response as any);
      } catch (err) {
        setError(err as ClientResponseError );
      }
    };
    getUsers();
  }, []);

  return [response, error];
};

export default useGetUsers;
