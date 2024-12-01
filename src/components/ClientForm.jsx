// src/components/ClientForm.jsx
import React, { useState } from 'react';

const ClientForm = () => {
    const [isAccountCreationEnabled, setIsAccountCreationEnabled] = useState(true);

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-6 text-xl font-bold text-blue-700">👤 Nouveau Client</h2>
            <form>
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
                        <i className="fas fa-user mr-2"></i> Nom
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="flex items-center text-gray-700">
                        <i className="fas fa-phone mr-2"></i> Téléphone
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
                <div className="mb-4">
                    <label className="flex items-center text-gray-700">
                        <i className="fas fa-camera mr-2"></i> Photo
                    </label>
                    <input type="file" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div className="flex items-center mb-4">
                    <span className="mr-2 text-gray-700">Créer un compte :</span>
                    <div
                        onClick={() => setIsAccountCreationEnabled(!isAccountCreationEnabled)}
                        className={`relative w-12 h-6 rounded-full cursor-pointer ${
                            isAccountCreationEnabled ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                    >
                        <div
                            className={`absolute w-6 h-6 bg-white rounded-full transition-transform ${
                                isAccountCreationEnabled ? 'translate-x-6' : 'translate-x-0'
                            }`}
                        ></div>
                    </div>
                    <span className="ml-2">{isAccountCreationEnabled ? 'Oui' : 'Non'}</span>
                </div>
                {isAccountCreationEnabled && (
                    <>
                        <div className="mb-4">
                            <label className="flex items-center text-gray-700">
                                <i className="fas fa-envelope mr-2"></i> Login
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="flex items-center text-gray-700">
                                <i className="fas fa-lock mr-2"></i> Password
                            </label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </>
                )}
                <div className="flex justify-between">
                    <button type="button" className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">
                        Annuler
                    </button>
                    <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                        Enregistrer
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ClientForm;
