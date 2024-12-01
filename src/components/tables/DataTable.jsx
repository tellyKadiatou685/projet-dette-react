import React from 'react';

const DataTable = ({ title, headers, data, className }) => (
  <div className="bg-white rounded-lg shadow">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <table className="w-full">
      <thead>
        <tr className="bg-[#1e4976] text-white">
          {headers.map((header, index) => (
            <th key={index} className="p-3 text-left">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            {Object.values(row).map((cell, cellIndex) => (
              <td key={cellIndex} className="p-3">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DataTable;