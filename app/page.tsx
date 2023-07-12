"use client";
import Image from "next/image";

export default function Home() {
  const callApi = async () => {
    const res = await fetch("/api/webhook", { method: "GET" });
    const data = await res.json();
    console.log(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => callApi()}>Request</button>
    </main>
  );
}
