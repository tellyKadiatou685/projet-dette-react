// src/components/DebtTracking.jsx
import React from 'react';
import Button from './Button';

const DebtTracking = () => (
    <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-xl font-bold text-blue-700">🔍 Suivi de Dette</h2>
        <div className="mb-4">
            <label className="flex items-center mb-2 text-gray-700">
                <i className="fas fa-phone mr-2"></i> Tél :
            </label>
            <div className="flex space-x-2">
                <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
             <Button text="OK" className="bg-blue-500 text-white px-3 py-2 rounded" />
            </div>
        </div>
        <div className="flex justify-between mb-6">
            <Button text="Infos" className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"/>
            <Button text="Dettes" className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"/>
            <Button text="+ Nouvelle"className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"/>
        </div>
        <div className="flex items-center space-x-4">
            <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
            <div className="flex-1">
                <div className="mb-4">
                    <label className="flex items-center text-gray-700">
                        <i className="fas fa-user mr-2"></i> Nom
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="flex items-center text-gray-700">
                        <i className="fas fa-user mr-2"></i> Prénom
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="flex items-center text-gray-700">
                        <i className="fas fa-map-marker-alt mr-2"></i> Adresse
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <div className="w-32 h-32 border border-gray-300 flex items-center justify-center">Code QR</div>
        </div>
    </div>
);

export default DebtTracking;
