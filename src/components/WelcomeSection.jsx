// src/components/WelcomeSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeSection = () => {
  return (
    <div className="flex-1 bg-blue-700 p-8 text-white flex flex-col justify-center items-center">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Logo */}
        <div className="bg-white p-3 rounded-md">
          <img src="/path/to/logo.png" alt="Logo" className="w-10 h-10" />
        </div>
        <h1 className="text-2xl font-bold">GESTION BOUTIQUE</h1>
        <h2 className="text-3xl font-bold">Bienvenue<br />Diallo Boutique</h2>
        <p className="text-sm opacity-80">
          La plateforme idéale pour gérer vos ventes, articles et clients avec efficacité.
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;
