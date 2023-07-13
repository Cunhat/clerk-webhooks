"use client";
import { SignOutButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/clerk-react";

export default function Home() {
  const callApi = async () => {
    const res = await fetch("/api/webhook", { method: "GET" });
    const data = await res.json();
    console.log(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <SignedIn>
        <SignOutButton>
          <button className="p-3 inline-flex bg-white rounded-md text-black">
            Logout
          </button>
        </SignOutButton>
        <button
          className="p-3 inline-flex bg-white rounded-md text-black"
          onClick={() => callApi()}
        >
          Request
        </button>
      </SignedIn>
    </main>
  );
}
