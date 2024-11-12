// components/LiquidationScenario.js
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const LiquidationScenario = () => {
  return (
    <div className="flex flex-col  p-4 rounded-lg  text-gray-800 space-y-4 border-[#f5c4a8] border bg-[#FFECE1]">
      <h2 className="text-xl font-semibold text-black">Price Liquidation Scenario</h2>
      <p className="text-sm text-gray-600 border border-[#f5c4a8] rounded-xl p-2 ">
       <FaExclamationTriangle className="inline mr-2 text-[#FFA500]" />
        The price liquidation scenario represents supplied asset prices slightly greater than the prices that could subject the position to liquidation.
      </p>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold text-black">$1,763.43</p>
        <button className="bg-orange-500 text-white py-2 px-6 text-lg rounded-2xl hover:bg-orange-600">
          Apply ✨
        </button>
      </div>
    </div>
  );
};

export default LiquidationScenario;
