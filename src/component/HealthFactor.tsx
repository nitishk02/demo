// components/HealthFactor.js
import React from 'react';
import { FaInfoCircle, FaInfo } from 'react-icons/fa';

const HealthFactor = () => {
  return (
    <div className="flex flex-col  p-4 rounded-lg  text-gray-800 space-y-4 bg-[#FFECE1] border-[#f5c4a8] border">
    <h2 className="text-xl font-semibold text-black flex items-center">
        Health Factor: <span className="text-yellow-600">2.24</span>
        <FaInfoCircle className="inline ml-2 text-[#9B9EA1]" />
    </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className='bg-white rounded-lg px-2 py-2 border-[#f5c4a8] border'>
          <span className="text-sm font-light">Total Borrowed <FaInfoCircle className="inline ml-2 text-[#9B9EA1] " /></span>
          <p className="text-base font-semibold">$917,884.25</p>
        </div>
        <div className='bg-white rounded-lg px-2 py-2 border-[#f5c4a8] border'>
          <span className="text-sm font-light">Available to Borrow<FaInfoCircle className="inline ml-2 text-[#9B9EA1] " /></span>
          <p className="text-base font-semibold">$1,078,973.40</p>
        </div>
        <div className='bg-white rounded-lg px-2 py-2 border-[#f5c4a8] border'>
          <span className="text-sm font-light">Supplied Asset Value<FaInfoCircle className="inline ml-2 text-[#9B9EA1] " /></span>
          <p className="text-base font-semibold">$2,543,767.72</p>
        </div>
       
        <div className='bg-white rounded-lg px-2 py-2 border-[#f5c4a8] border'>
          <span className="text-sm font-light">Net Asset Value<FaInfoCircle className="inline ml-2 text-[#9B9EA1] " /></span>
          <p className="text-base font-semibold">$2,543,767.72</p>
        </div>
       
      </div>
    </div>
  );
};

export default HealthFactor;
