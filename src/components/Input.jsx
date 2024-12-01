import React from 'react';

const Input = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
