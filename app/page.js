"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Disclaimer from "./(components)/Disclaimer";

const Home = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log("HOME SESSION:", session);

  return (
    <div className="w-full flex items-center">
      {!session?.user ? (
        <div className="w-full flex flex-col justify-center items-center text-white">
          <h1>Welcome to Trade Logix</h1>
          <p>Please sign in to access the site</p>
        </div>
      ) : (
        <div>
          <Disclaimer />
        </div>
      )}
    </div>
  );
};

export default Home;
