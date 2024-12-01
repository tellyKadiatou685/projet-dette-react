import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div
                className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 relative modal-content"
                style={{
                    animation: 'fadeIn 0.4s ease-out',
                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
                }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
