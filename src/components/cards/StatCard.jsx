import React from 'react';

const StatCard = ({ icon, title, value, change, period }) => (
  <div className="bg-[#1e4976] rounded-lg p-6 text-white">
    <div className="flex items-center gap-2 mb-4">
      {icon}
      <span className="text-gray-300">{title}</span>
    </div>
    <div className="text-2xl font-bold mb-2">{value}</div>
    <div className="text-sm">
      <span className={`${
        change.startsWith('+') ? 'text-green-400' : 'text-red-400'
      }`}>
        {change}
      </span>
      <span className="text-gray-300 ml-1">{period}</span>
    </div>
  </div>
);

export default StatCard;