// components/PositionDetails.js
import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const PositionDetails = () => {
    return (
        <div className="flex flex-col  p-4 rounded-lg text-gray-800 space-y-4 bg-[#FFECE1] border-[#f5c4a8] border">
            <h2 className="text-xl font-semibold text-black flex items-center">
                Advanced Position Details
            </h2> 
            <div className="grid grid-cols-2 gap-4">
                <div className='bg-white rounded-lg px-2 py-2 border-[#f5c4a8] border'>
                    <span className="text-sm font-light">Liquidation Threshold <FaInfoCircle className="inline ml-2 text-[#9B9EA1] " /></span>
                    <p className="text-base font-semibold">81.0%</p>
                </div>
                <div className='bg-white rounded-lg px-2 py-2 border-[#f5c4a8] border'>
                    <span className="text-sm font-light">Max Loan to Value <FaInfoCircle className="inline ml-2 text-[#9B9EA1]" /></span>
                    <p className="text-base font-semibold">81.0%</p>
                </div>
                <div className='bg-white rounded-lg px-2 py-2 border-[#f5c4a8] border'>
                    <span className="text-sm font-light">Current Loan to Value <FaInfoCircle className="inline ml-2 text-[#9B9EA1]" /></span>
                    <p className="text-base font-semibold">81.0%</p>
                </div>
                <div className='bg-white rounded-lg px-2 py-2 border-[#f5c4a8] border'>
                    <span className="text-sm font-light">Utilized Borrowing Power<FaInfoCircle className="inline ml-2 text-[#9B9EA1]" /></span>
                    <p className="text-base font-semibold">81.0%</p>
                </div>
                
            </div>
        </div>
    );
};

export default PositionDetails;
