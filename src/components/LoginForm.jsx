// src/components/LoginForm.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate ici

const LoginForm = () => {
    const navigate = useNavigate(); // Ajoutez cette ligne

    const handleLoginClick = (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du formulaire
        navigate('/dashboard'); // Redirige vers la page tableau de bord
    };

    return (
        <div className="flex-1 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Connexion</h2>
            <p className="text-sm mb-6">Connectez-vous pour accéder à votre espace de gestion.</p>

            <form className="space-y-4" onSubmit={handleLoginClick}>
                <div>
                    <label className="text-sm font-medium">Adresse e-mail</label>
                    <input
                        type="email"
                        placeholder="exemple@domaine.com"
                        className="w-full mt-1 px-4 py-2 border rounded-md"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium">Mot de passe</label>
                    <input
                        type="password"
                        placeholder="********"
                        className="w-full mt-1 px-4 py-2 border rounded-md"
                    />
                </div>
                <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-md font-semibold">
                    Se connecter
                </button>
                <div className="flex justify-between text-sm">
                    <a href="#" className="text-blue-600">Mot de passe oublié?</a>
                    <button type="button" className="text-gray-500">Annuler</button>
                </div>
                <button type="button" className="w-full bg-blue-700 text-white py-2 rounded-md font-semibold mt-2">
                    Espace Client
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
