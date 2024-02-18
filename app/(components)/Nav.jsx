"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Nav = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleClick = () => {
    router.push("/api/auth/signin");
  };

  return (
    <div className="nav-bg py-2 sticky top-0 z-50 w-full flex items-center justify-between text-white">
      <p>NAV</p>
      {session?.user ? (
        <button
          className="bg-red-700 text-white px-3 py-2 rounded-xl"
          onClick={signOut}
        >
          Logout
        </button>
      ) : (
        <button className="btn-cta" onClick={handleClick}>Sign In</button>
      )}

    </div>
  );
};

export default Nav;
