// src/pages/DettesPage.jsx
import React from 'react';
import ClientForm from '../components/ClientForm';
import DebtTracking from '../components/DebtTracking';


const DettesPage = () => {
    console.log("Rendering DettesPage");
    return (
        <div className="grid grid-cols-1 gap-6 p-6 bg-gray-100 md:grid-cols-2">
            <div className="client-form-container">
                <ClientForm />
            </div>
            <div className="debt-tracking-container">
                <DebtTracking />
            </div>
        </div>
    );
};

export default DettesPage;
