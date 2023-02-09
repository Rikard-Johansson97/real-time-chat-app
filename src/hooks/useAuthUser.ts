import { UserData, UserResponse } from "@/types/UserTypes";
import PocketBase, { ClientResponseError } from "pocketbase";
import { useEffect, useState } from "react";

const pb = new PocketBase("http://127.0.0.1:8090");

const useAuthUser = (email: string, password: string) => {
  const [response, setResponse] = useState<UserResponse | []>(
    []
  );
  const [error, setError] = useState<ClientResponseError | null>(null);

  useEffect(() => {
    const authUser = async () => {
      try {
        const res = await pb
          .collection("users")
          .authWithPassword(email, password);
        await pb.collection("users").requestVerification(email);
        setResponse(res as any);
      } catch (err) {
        setError(err as ClientResponseError);
      }
    };
    authUser();
  }, [email, password]);

  return [response, error];
};

export default useAuthUser;
