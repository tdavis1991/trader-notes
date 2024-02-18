"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";

const Nav = () => {
  const { data: session, status } = useSession();
  return (
    <div className="bg-gray-800 py-4 sticky top-0 z-50 w-full flex items-center">
      <p>NAV</p>
      <button
        className="bg-red-700 text-white px-3 py-2 rounded-xl"
        onClick={signOut}
      >
        Logout
      </button>
    </div>
  );
};

export default Nav;
