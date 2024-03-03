"use client";
import React from "react";
import SearchBar from "../(components)/SearchBar";

const Trades = () => {
  return (
    <div className="flex flex-col items-center w-11/12 mt-2">
      <h1 className="text-white">Trades</h1>
      <SearchBar />
    </div>
  );
};

export default Trades;
