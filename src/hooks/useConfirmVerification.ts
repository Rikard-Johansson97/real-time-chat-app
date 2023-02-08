import { useEffect, useState } from "react";
import PocketBase, { ClientResponseError } from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const useConfirmVerification = (token: string) => {
    
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<ClientResponseError | null>(null);

  useEffect(() => {
    const confirmVerification = async () => {
      try {
        const response = await pb.collection("users").confirmVerification(token);
        setResponse(response);
      } catch (err) {
        setError(err as ClientResponseError);
      }
    };
    confirmVerification();
  }, [token]);

  return [response, error];
};

export default useConfirmVerification;
