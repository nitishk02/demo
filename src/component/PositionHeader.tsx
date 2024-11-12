import React from 'react';
import { FaCube, FaRegCopy, FaExternalLinkAlt } from 'react-icons/fa';

const PositionHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 rounded-full shadow-md border border-orange-400 space-y-4 md:space-y-0 md:space-x-4 w-full bg-white">
      <div className="flex flex-col bg-white text-center md:text-left">
        <p className="text-lg font-semibold text-gray-800 hidden md:block">0xb8ec7c6483444572a486e22dd8f875bb26e14472</p>
        <p className="text-sm text-gray-500 hidden md:block">Found Aave position in 1 market.</p>
      </div>
      <div className="flex items-center justify-center md:justify-end space-x-6 text-gray-600">
        <FaCube className="w-5 h-5 cursor-pointer hover:text-gray-800" />
        <FaRegCopy className="w-5 h-5 cursor-pointer hover:text-gray-800" />
        <FaExternalLinkAlt className="w-5 h-5 cursor-pointer hover:text-gray-800" />
      </div>
    </div>
  );
};

export default PositionHeader;
