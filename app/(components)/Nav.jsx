"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log('NAV SESSION', session)

  const handleClick = () => {
    router.push("/api/auth/signin");
  };

  return (
    <div className="nav-bg py-2 sticky top-0 z-50 w-full flex items-center justify-center text-white">

      {session?.user ? (
        <div className="w-full mx-2 flex justify-between items-center">
          <h2>Trade Logix</h2>
          <div className="flex gap-4 font-bold text-lg">
            <Link href="/trades">Trades</Link>
            <Link href="/watchlist">Watchlists</Link>
          </div>

          <div className="flex gap-1 items-center">
            <p>{session?.user?.email}</p>
            <Image
              src={session?.user?.image}
              width={30}
              height={30}
              className="rounded-full"
            />
          </div>

        </div>

      ) : (
        <div className="flex w-full justify-between">
          <h2>Trade Logix</h2>
          <button className="btn-cta" onClick={handleClick}>Sign In</button>
        </div>

      )}
    </div>
  );
};

// <button
// className="bg-red-700 text-white px-3 py-2 rounded-xl"
// onClick={signOut}
// >
// Logout
// </button>

export default Nav;
