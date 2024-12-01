import React, { useState } from 'react';

import Button from '../components/Button';
import Pagination from '../components/Pagination';
import Modal from '../components/Modal';
import UserForm from '../components/UserForm';
import DataTable from '../components/tables/DataTable';
import UserDetail from '../components/UserDetail';

// Données d'exemple
const usersData = [
  { role: 'client', nomComplet: 'ousseynou diedhiou', login: 'diedhiou@gmail.com', telephone: '785304869', action: '' },
  { role: 'admin', nomComplet: 'ibrahima diallo', login: 'sory@gmail.com', telephone: '785719115', action: '' },
  { role: 'client', nomComplet: 'ndiaga lo', login: 'ndiaga@gmail.com', telephone: '775714386', action: '' },
  { role: 'boutiquier', nomComplet: 'astou kane', login: 'astou@gmail.com', telephone: '762346245', action: '' }
];

const UtilisateursPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // Exemple de pagination
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // État pour le modal d'ajout
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // État pour le modal de détails
  const [selectedUser, setSelectedUser] = useState(null); // Utilisateur sélectionné pour le détail

  // En-têtes du tableau
  const headers = ['ROLE', 'NOM COMPLET', 'LOGIN', 'TELEPHONE', 'ACTION'];

  // Gestion de la pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Ouverture du modal pour un nouvel utilisateur
  const handleNewUser = () => {
    setIsAddModalOpen(true);
  };

  // Affichage des détails de l'utilisateur
  const handleShowUserDetail = (user) => {
    setSelectedUser(user);
    setIsDetailModalOpen(true);
  };

  // Enregistrement des détails de l'utilisateur
  const handleSaveUserDetail = () => {
    console.log('Enregistrer les détails de l\'utilisateur:', selectedUser);
    setIsDetailModalOpen(false);
  };

  // Enregistrement du nouvel utilisateur
  const handleSaveUser = (newUser) => {
    console.log('Enregistrer l\'utilisateur:', newUser);
    setIsAddModalOpen(false);
  };

  // Fermeture des modals
  const handleCancel = () => {
    setIsAddModalOpen(false);
    setIsDetailModalOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Ecran Admin</h1>
        <Button text="NOUVEAU" className="bg-blue-500 hover:bg-blue-600" onClick={handleNewUser} />
      </div>

      {/* Boutons de filtrage */}
      <div className="flex space-x-2 mb-4">
        <Button text="ALL" className="bg-red-500 hover:bg-red-600" />
        <Button text="Admin" className="bg-gray-300 hover:bg-gray-400" />
        <Button text="Boutiquier" className="bg-gray-300 hover:bg-gray-400" />
        <Button text="Client" className="bg-gray-300 hover:bg-gray-400" />
      </div>

      {/* Tableau des utilisateurs */}
      <DataTable
        title=""
        headers={headers}
        data={usersData.map((user) => ({
          ...user,
          action: (
            <div className="flex space-x-2">
              <Button text="👤" className="bg-blue-500 hover:bg-blue-600" onClick={() => handleShowUserDetail(user)} />
              <Button text="✏️" className="bg-blue-500 hover:bg-blue-600" onClick={handleNewUser}/>
            </div>
          )
        }))}
      />

      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {/* Modal pour ajouter un utilisateur */}
      {isAddModalOpen && (
        <Modal isOpen={isAddModalOpen} onClose={handleCancel}>
          <UserForm onCancel={handleCancel} onSave={handleSaveUser} />
        </Modal>
      )}

      {/* Modal pour afficher les détails d'un utilisateur */}
      {isDetailModalOpen && selectedUser && (
        <Modal isOpen={isDetailModalOpen} onClose={handleCancel}>
          <UserDetail user={selectedUser} onCancel={handleCancel} onSave={handleSaveUserDetail} />
        </Modal>
      )}
    </div>
  );
};

export default UtilisateursPage;
