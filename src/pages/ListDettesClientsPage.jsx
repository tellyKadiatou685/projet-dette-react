import React from 'react';
import DataTable from '../components/tables/DataTable';
import StatCard from '../components/cards/StatCard';
import Button from '../components/Button';

export default function ListDettesClientsPage() {
  const clientInfo = {
    prenom: "Ibrahima Sory",
    nom: "Diallo",
    tel: "785619115",
    email: "sorydiallo371@gmail.com",
    photoUrl: "https://example.com/photo.jpg"
  };

  const stats = {
    total: "100.000 FCFA",
    verse: "55.000 FCFA",
    restant: "45.000 FCFA"
  };

  const dettes = [
    { date: "24-07-2024", montant: "100000 FCFA", verser: "55000 FCFA", restant: "45000 FCFA", action: <Button text="Détails" className="bg-blue-500" /> },
    // Ajoutez d'autres dettes si nécessaire
  ];

  const tableHeaders = ["DATE", "MONTANT", "VERSER", "RESTANT", "ACTION"];

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Client Info */}
        <div className="bg-[#1e4976] text-white rounded-lg p-6">
          <div className="flex items-center gap-4">
            <img
              src={clientInfo.photoUrl}
              alt="Client Photo"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <p>Prenom: {clientInfo.prenom}</p>
              <p>Nom: {clientInfo.nom}</p>
              <p>Tel: {clientInfo.tel}</p>
              <p>Email: {clientInfo.email}</p>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="col-span-2 flex gap-4">
          <StatCard
            title="Montant Total"
            value={stats.total}
            change="+10.000 FCFA" // Ajoutez la propriété change
            icon={<i className="fas fa-dollar-sign"></i>}
          />
          <StatCard
            title="Montant Versé"
            value={stats.verse}
            change="+5.000 FCFA" // Ajoutez la propriété change
            icon={<i className="fas fa-dollar-sign"></i>}
          />
          <StatCard
            title="Montant Restant"
            value={stats.restant}
            change="-5.000 FCFA" // Ajoutez la propriété change
            icon={<i className="fas fa-dollar-sign"></i>}
          />
        </div>
      </div>

      {/* Table des dettes */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Liste des dettes</h2>
          <div className="flex gap-2">
            <Button text="Non soldées" className="bg-red-500" />
            <Button text="Soldées" className="bg-blue-500" />
          </div>
        </div>
        
        <DataTable title="" headers={tableHeaders} data={dettes} />
        
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <Button text="<" className="bg-gray-200 text-gray-800" />
          <Button text="1" className="bg-blue-500" />
          <Button text="2" className="bg-gray-200 text-gray-800" />
          <Button text=">" className="bg-gray-200 text-gray-800" />
        </div>
      </div>
    </div>
  );
}
