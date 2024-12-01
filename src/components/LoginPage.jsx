// src/components/LoginPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ajoutez cette ligne
import WelcomeSection from './WelcomeSection';
import LoginForm from './LoginForm';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate('/dashboard'); // Redirige vers la page tableau de bord
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100"> {/* Ajouté pour centrer */}
      <div className="bg-white shadow-lg rounded-lg flex w-full max-w-4xl overflow-hidden">
        {/* Section de bienvenue */}
        <WelcomeSection />
        {/* Formulaire de connexion */}
        <LoginForm />
      </div>
    </div>
    );
};

export default LoginPage;
