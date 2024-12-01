// src/components/Button.jsx
import React from 'react';

const Button = ({ text, onClick, className }) => (
    <button
        onClick={onClick}
        className={`${className} px-4 py-2 rounded-md text-white focus:outline-none`}
    >
        {text}
    </button>
);

export default Button;
