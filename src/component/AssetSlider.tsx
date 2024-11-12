// components/AssetSlider.js
import React from 'react';
import { RxCross2 } from "react-icons/rx";

const AssetSlider = () => {
    return (
        <div className="flex flex-col  p-4 rounded-2xl  text-gray-800 space-y-4 border-[#f5c4a8] border bg-[#FFECE1] py-8 px-6">
            <div className='grid grid-cols-2 '>
                <div className='flex flex-row'>
                    <h2 className="text-lg text-gray-900"><span className='font-semibold'>wstETH</span> <span className='text-orange-300'>|</span> 0.01% APY <span className='text-orange-300'>|</span> <span className='underline'>DETAILS</span></h2>

                </div>
                <div className=' justify-end gap-x-5 flex items-center'>
                    <span className='text-2xl font-bold'>$416,855.18 (USD)</span>
                    <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-700">
                        Supply Assets →
                    </button>
                </div>
            </div>
            <div className='flex flex-row items-center space-x-4'>
                <div className='flex-1 border-[#f5c4a8] border-2 rounded-xl p-4'>
                    <label className="text-sm font-medium text-gray-700">wstETH Quantity</label>
                    <input type="range" className="w-full" min="0" max="100" defaultValue="50" style={{ accentColor: 'orange' }} />
                </div>
                <RxCross2 className='text-4xl text-black' />
                <div className='flex-1 border-[#f5c4a8] border-2 rounded-xl p-4'>
                    <label className="text-sm font-medium text-gray-700">wstETH Price (USD)</label>
                    <input type="range" className="w-full" min="0" max="100" defaultValue="50" style={{ accentColor: 'orange' }} />
                </div>
            </div>
        </div>
    );
};

export default AssetSlider;
