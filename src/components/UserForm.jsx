import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

const UserForm = ({ onCancel, onSave }) => {
  const [newUser, setNewUser] = useState({
    prenom: '',
    nom: '',
    tel: '',
    adresse: '',
    login: '',
    password: '',
    role: '',
    file: null,
  });

  const handleFileChange = (e) => {
    setNewUser({ ...newUser, file: e.target.files[0] });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">N. UTILISATEUR</h2>

      <div className="mb-4">
        <Input
          placeholder="Prenom"
          value={newUser.prenom}
          onChange={(e) => setNewUser({ ...newUser, prenom: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <Input
          placeholder="Nom"
          value={newUser.nom}
          onChange={(e) => setNewUser({ ...newUser, nom: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <Input
          placeholder="Tel"
          value={newUser.tel}
          onChange={(e) => setNewUser({ ...newUser, tel: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <Input
          placeholder="Adresse"
          value={newUser.adresse}
          onChange={(e) => setNewUser({ ...newUser, adresse: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <Input
          placeholder="Login"
          value={newUser.login}
          onChange={(e) => setNewUser({ ...newUser, login: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <Input
          type="password"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <input type="file" onChange={handleFileChange} />
      </div>

      <div className="mb-4 flex space-x-2">
        <Button text="Apprentie" className="bg-gray-300" onClick={() => setNewUser({ ...newUser, role: 'Apprentie' })} />
        <Button text="Boutiquier" className="bg-gray-300" onClick={() => setNewUser({ ...newUser, role: 'Boutiquier' })} />
        <Button text="Clients" className="bg-blue-500" onClick={() => setNewUser({ ...newUser, role: 'Client' })} />
      </div>

      <div className="flex justify-between mt-6">
        <Button text="ANNULER" className="bg-red-500" onClick={onCancel} />
        <Button text="ENREGISTRER" className="bg-blue-500" onClick={() => onSave(newUser)} />
      </div>
    </div>
  );
};

export default UserForm;
