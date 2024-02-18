"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Disclaimer from "./(components)/Disclaimer";

const Home = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log("HOME SESSION:", session);

  const handleClick = () => {
    router.push("/api/auth/signin");
  };

  return (
    <div>
      {!session?.user ? (
        <div>
          <h1>Welcome to Trade Logix</h1>
          <p>Please sign in to access the site</p>
          <button onClick={handleClick}>Sign In</button>
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
