import React from 'react';
import Button from './Button';

const UserDetail = ({ user, onCancel, onSave }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">COMPTE</h2>

      <div className="flex items-center mb-4">
        <img
          src={user.photo} 
          alt="user"
          className="w-24 h-24 rounded-md mr-4"
        />
        <div>
          <p><strong>Prénom:</strong> {user.prenom}</p>
          <p><strong>Nom:</strong> {user.nom}</p>
          <p><strong>Tel:</strong> {user.tel}</p>
          <p><strong>Adresse:</strong> {user.adresse}</p>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Login</label>
        <input
          type="text"
          placeholder="Login"
          className="w-full p-2 border rounded"
          value={user.login}
          onChange={(e) => user.setLogin(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={user.password}
          onChange={(e) => user.setPassword(e.target.value)}
        />
      </div>

      <div className="flex justify-between mt-6">
        <Button text="ANNULER" className="bg-red-500" onClick={onCancel} />
        <Button text="ENREGISTRER" className="bg-blue-500" onClick={onSave} />
      </div>
    </div>
  );
};

export default UserDetail;
