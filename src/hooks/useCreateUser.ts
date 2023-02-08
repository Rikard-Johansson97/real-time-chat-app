import { UserData } from "@/types/createUser";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";

const pb = new PocketBase("http://127.0.0.1:8090");

const useCreateUser = (data: UserData) => {
  const [response, setResponse] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const createUser = async () => {
      try {
        const response = await pb.collection("users").create(data);
        await pb.collection("users").requestVerification(data.email);
        setResponse(response);
      } catch (err) {
        setError(err);
      }
    };
    createUser();
  }, [data]);

  return [response, error];
};

export default useCreateUser;
