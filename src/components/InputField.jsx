// src/components/InputField.jsx
import React from 'react';

const InputField = ({ label, icon, type = "text", value, onChange }) => (
    <div className="mb-4">
        <label className="flex items-center mb-2 text-gray-700">
            <i className={`mr-2 icon-${icon}`}></i> {label}
        </label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
);

export default InputField;
