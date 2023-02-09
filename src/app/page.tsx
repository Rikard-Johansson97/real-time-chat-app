"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSessionStorage } from "usehooks-ts";
import Dashboard from "../components/Dashboard";

export default function Home() {
  const [token, setToken] = useSessionStorage("token", "");
  const router = useRouter();

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, []);

  return <>{domLoaded && <main>{token && <Dashboard />}</main>}</>;
}
