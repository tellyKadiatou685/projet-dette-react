// src/pages/DemandesPage.jsx
import React, { useState } from 'react';
import DataTable from '../components/tables/DataTable';
import Pagination from '../components/Pagination';
import Button from '../components/Button';


const DemandesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const headers = ['DATE', 'MONTANT', 'NOM COMPLET', 'TELEPHONE', 'ACTION'];
  
  const data = [
    {
      date: '24-07-2024',
      montant: '20.000 FCFA',
      nom_complet: 'OUSSEYNOU DIEDHIOU',
      telephone: '785304869',
      action: <Button text="Details" className="bg-gray-400 hover:bg-gray-500 text-green-500" />
    },
    {
      date: '24-07-2024',
      montant: '20.000 FCFA',
      nom_complet: 'OUSSEYNOU DIEDHIOU',
      telephone: '785304869',
      action: <Button text="Details" className="bg-gray-400 hover:bg-gray-500 text-green-500" />
    }
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-6 bg-white shadow rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-medium">Liste des demandes</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm">Statut :</span>
          <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none">
            <option>En cours</option>
            <option>Validée</option>
            <option>Refusée</option>
          </select>
        </div>
      </div>

      <DataTable 
        title=""
        headers={headers}
        data={data}
        className="mb-4"
      />

      <div className="flex justify-between items-center mt-4">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <Button
          text="SAVE" 
          className="bg-blue-500 hover:bg-blue-600"
        />
      </div>
    </div>
  );
};

export default DemandesPage;