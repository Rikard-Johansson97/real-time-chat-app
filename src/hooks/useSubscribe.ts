import { UserData } from "@/types/createUser";
import PocketBase, { ClientResponseError } from "pocketbase";
import { useEffect, useState } from "react";

const pb = new PocketBase("http://127.0.0.1:8090");

const useAuthUser = (email: string, password: string) => {
  const [response, setResponse] = useState<UserData | null>(
    null
  );
  const [error, setError] = useState<ClientResponseError | null>(null);

  useEffect(() => {
    const authUser = async () => {
      try {
        const response = await pb
          .collection("users")
          .authWithPassword(email, password);
        await pb.collection("users").requestVerification(email);
        setResponse(response);
      } catch (err) {
        setError(err as ClientResponseError);
      }
    };
    authUser();
  }, [email, password]);

  return [response, error];
};

export default useAuthUser;
