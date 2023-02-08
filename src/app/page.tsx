"use client";
import { useRouter } from "next/navigation";
import { useSessionStorage } from "usehooks-ts";
import useConfirmVerification from "./../hooks/useConfirmVerification";
import Dashboard from "../components/Dashboard";

export default function Home() {
  const [token, setToken] = useSessionStorage("token", "");
  const [response, error] = useConfirmVerification(token);
  const router = useRouter();

  console.log(response);
  console.log(token);

  if (!token) {
    router.push("/login");
  }

  return (
    <main>
      <Dashboard />
    </main>
  );
}
