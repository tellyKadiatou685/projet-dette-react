// pages/DashboardPage.js
import React from 'react';
import { statsData, clientsData, stockData } from './dashboardData';
import StatCard from '../components/cards/StatCard';
import DataTable from '../components/tables/DataTable';

const DashboardPage = () => {
  return (
    <>
      {/* Grille des statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Section des tableaux */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DataTable
          title="Liste des Clients"
          headers={clientsData.headers}
          data={clientsData.data}
        />
        <DataTable
          title="Articles en Rupture de Stock"
          headers={stockData.headers}
          data={stockData.data}
        />
      </div>
    </>
  );
};

export default DashboardPage;
