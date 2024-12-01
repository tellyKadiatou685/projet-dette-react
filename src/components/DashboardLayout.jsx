import React from 'react';
import { Outlet } from 'react-router-dom'; // Import de Outlet pour les routes enfants
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar /> {/* Sidebar */}
      <div className="flex-1">
        <Header /> {/* Header */}
        <div className="p-6">
          <Outlet /> {/* Les routes enfants s'afficheront ici */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
