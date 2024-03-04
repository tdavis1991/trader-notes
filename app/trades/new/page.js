"use client";
import React, { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    symbol: "",
    actionableSignal: "",
    percentage: 0,
    profitOrLost: "",
    ftfc: false,
    notes: "",
  });

  const handleChange = () => {
    console.log("IT WORKS");
  };

  return (
    <div className="w-full flex justify-center items-center">
      <form className="w-full flex flex-col items-center nav-bg mt-5 p-5 shadow-lg rounded-lg text-white">
        <h1>New Trade</h1>
        <label>Symbol</label>
        <input
          id="symbol"
          name="symbol"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.symbol}
        />
        <label>Actionable Signal</label>
        <input
          id="actionableSignal"
          name="actionableSignal"
          type="text"
          onChange={handleChange}
          value={formData.actionableSignal}
        />
        <label>Percentage</label>
        <input
          id="percentage"
          name="percentage"
          type="number"
          onChange={handleChange}
          required={true}
          value={formData.percentage}
        />
        <label>P/L</label>
        <select>
          <option>Profit</option>
          <option>Lost</option>
        </select>
        <label>Notes</label>
        <textarea
          id="notes"
          name="notes"
          onChange={handleChange}
          required={true}
          value={formData.notes}
          rows="5"
        />
        <button className="btn-cta w-full">Save Trade</button>
      </form>
    </div>
  );
};

export default page;
