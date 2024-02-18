"use client";
import React from "react";

const Disclaimer = () => {
  return (
    <div class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-lg flex flex-col justify-center w-full">
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-lg font-semibold">
            **<span className="text-red-600">DISCLAIMER</span>**
          </h1>
        </div>
        <div>
          <p>
            [App Name] is a trading app designed for informational and
            educational purposes only. The information provided on [App Name] is
            not intended to be investment advice and should not be construed as
            such. Trading stocks and other financial instruments involves risk
            and may not be suitable for all investors. Users should carefully
            consider their financial situation, investment objectives, and risk
            tolerance before making any investment decisions. The content
            provided on [App Name], including but not limited to stock prices,
            charts, and analysis, is obtained from sources believed to be
            reliable, but we cannot guarantee its accuracy, completeness, or
            timeliness. [App Name] and its developers do not warrant or make any
            representations regarding the use or results of the information
            provided on the app in terms of its accuracy, reliability, or
            otherwise. Users are solely responsible for their own investment
            decisions and should seek the advice of a qualified financial
            advisor or professional before making any investment. [App Name] and
            its developers shall not be liable for any loss or damage resulting
            from reliance on the information provided on the app. By using [App
            Name], you agree to release, indemnify, and hold harmless [App Name]
            and its developers from any and all claims, liabilities, losses,
            damages, costs, and expenses arising out of or related to your use
            of the app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
