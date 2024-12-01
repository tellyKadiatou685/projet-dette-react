// src/components/ToggleSwitch.jsx
import React from 'react';

const ToggleSwitch = ({ isChecked, onToggle, label }) => (
    <div className="flex items-center mb-4">
        <label className="mr-3 text-gray-700">{label}</label>
        <input
            type="checkbox"
            checked={isChecked}
            onChange={onToggle}
            className="toggle-checkbox w-6 h-6"
        />
    </div>
);

export default ToggleSwitch;
