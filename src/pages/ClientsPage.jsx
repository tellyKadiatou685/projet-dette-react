import React, { useState, useEffect } from 'react';
import DataTable from '../components/tables/DataTable';
import Button from '../components/Button';
import ClientForm from '../components/ClientForm';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';

const ClientsPage = () => {
  const [clients, setClients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const clientsPerPage = 4; // Nombre de clients par page

  const headers = ['Nom', 'Téléphone', 'Adresse', 'Montant dû', 'Actions'];

  useEffect(() => {
    const exempleClients = [
      { nom: 'Ibrahima Diallo', telephone: '785619115', adresse: 'Dakar, Senegal', montantDu: '5,000 FCFA' },
      { nom: 'Amina Ndiaye', telephone: '785619115', adresse: 'Thiès, Senegal', montantDu: '15,000 FCFA' },
      { nom: 'Moussa Fall', telephone: '785619115', adresse: 'Saint-Louis, Senegal', montantDu: '10,000 FCFA' },
      { nom: 'Fatou Diop', telephone: '785619115', adresse: 'Kaolack, Senegal', montantDu: '10,000 FCFA' },
      // Ajoutez d'autres clients pour tester la pagination
    ];

    setClients(exempleClients);
  }, []);

  const ajouterClient = (nouveauClient) => {
    setClients([...clients, nouveauClient]);
    setIsModalOpen(false);
  };

  const supprimerClient = (index) => {
    const nouvelleListeClients = clients.filter((_, i) => i !== index);
    setClients(nouvelleListeClients);
  };

  const dataAvecActions = clients
  .slice((currentPage - 1) * clientsPerPage, currentPage * clientsPerPage)
  .map((client, index) => ({
    ...client,
    actions: (
      <Button
        text="Détails"
        onClick={() => navigate('/clients/dettes')}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      />
    ),
  }));
    const navigate = useNavigate();

  return (
    <div className="p-6 bg-white shadow rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Lister Clients</h1>
        <Button
          text="Nouveau Client"
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        />
      </div>

      {/* Tableau des clients */}
      <DataTable
        title=""
        headers={headers}
        data={dataAvecActions}
        striped
      />

      {/* Pagination */}
      <Pagination 
        currentPage={currentPage} 
        totalPages={Math.ceil(clients.length / clientsPerPage)} 
        onPageChange={(page) => setCurrentPage(page)} 
      />

      {/* Modal pour ajouter un client */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ClientForm ajouterClient={ajouterClient} />
      </Modal>
    </div>
  );
};

export default ClientsPage;
