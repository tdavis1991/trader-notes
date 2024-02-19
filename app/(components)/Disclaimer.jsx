"use client";
import React, { useState } from "react";

const Disclaimer = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleClick = () => {
    setCloseModal(!closeModal)
  }

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ${closeModal ? 'hidden' : ''}`}>
      <div className="bg-white p-6 rounded-lg flex flex-col justify-center w-1/2">
        <div className="flex w-full justify-center items-center mb-4">
          <h1 className="text-lg font-semibold">
            **<span className="text-red-600 font-bold">DISCLAIMER</span>**
          </h1>
        </div>
        <div>
          <p>
            Trade Logix is a trading app designed for informational and
            educational purposes only. The information provided on Trade Logix is
            not intended to be investment advice and should not be construed as
            such. <br /><br />Trading stocks and other financial instruments involves risk
            and may not be suitable for all investors. Users should carefully
            consider their financial situation, investment objectives, and risk
            tolerance before making any investment decisions.<br /><br /> The content
            provided on Trade Logix, including but not limited to stock prices,
            charts, and analysis, is obtained from sources believed to be
            reliable, but we cannot guarantee its accuracy, completeness, or
            timeliness. Trade Logix and its developers do not warrant or make any
            representations regarding the use or results of the information
            provided on the app in terms of its accuracy, reliability, or
            otherwise.<br /><br /> Users are solely responsible for their own investment
            decisions and should seek the advice of a qualified financial
            advisor or professional before making any investment. Trade Logix and
            its developers shall not be liable for any loss or damage resulting
            from reliance on the information provided on the app.<br /><br /> By using Trade Logix,
            you agree to release, indemnify, and hold harmless Trade Logix
            and its developers from any and all claims, liabilities, losses,
            damages, costs, and expenses arising out of or related to your use
            of the app.
          </p>
          <div className="w-full flex flex-col items-center my-3 gap-2">
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              I have read and agree to the terms and conditions
            </label>
            <button className={` text-white py-2 px-4 rounded-md ${isChecked ? 'primary-cta-bg cursor-pointer' : 'bg-gray-300 cursor-not-allowed'}`} onClick={handleClick} disabled={!isChecked}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
