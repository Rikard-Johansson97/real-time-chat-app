import { UserData, UserResponse } from "@/types/UserTypes";
import PocketBase, { ClientResponseError } from "pocketbase";
import { useEffect, useState } from "react";

const pb = new PocketBase("http://127.0.0.1:8090");

const useCreateUser = (data: UserData) => {
  const [response, setResponse] = useState<UserResponse | []>([]);
  const [error, setError] = useState<ClientResponseError | null>(null);

  useEffect(() => {
    const createUser = async () => {
      try {
        const response = await pb.collection("users").create(data);
        await pb.collection("users").requestVerification(data.email);
        setResponse(response as any);
      } catch (err) {
        setError(err as ClientResponseError );
      }
    };
    createUser();
  }, [data]);

  return [response, error];
};

export default useCreateUser;
