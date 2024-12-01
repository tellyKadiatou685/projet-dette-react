import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './pages/DashboardPage';
import DettesPage from './pages/DettesPage';
import ClientsPage from './pages/ClientsPage';
import ArticlesPage from './pages/ArticlesPage';
import UtilisateursPage from './pages/UtilisateursPage';
import DashboardLayout from './components/DashboardLayout';
import '@fortawesome/fontawesome-free/css/all.min.css';
import DemandesPage from './pages/DemandesPage';
import ListDettesClientsPage from './pages/ListDettesClientsPage';

function App() {
  return (
    <Routes>
      {/* Route pour la page de connexion */}
      <Route path="/" element={<LoginPage />} />

      {/* Route parent pour toutes les pages avec le layout Dashboard */}
      <Route path="/" element={<DashboardLayout />}>
        {/* Routes enfants */}
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="dettes" element={<DettesPage />} />
        <Route path="clients" element={<ClientsPage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="utilisateurs" element={<UtilisateursPage />} />
        <Route path="demandes" element={<DemandesPage/>} />
        <Route path="clients/dettes" element={<ListDettesClientsPage />} /> {/* Ajoutez cette ligne */}
      </Route>
    </Routes>
  );
}

export default App;
