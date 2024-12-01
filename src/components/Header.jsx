// Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="bg-white h-16 flex items-center justify-between px-6 shadow">
      <input
        type="text"
        placeholder="Rechercher dans votre boutique..."
        className="w-full p-3 pr-10 border rounded-lg"
      />
      <div className="flex items-center">
        <img
          src="/path-to-user-image.jpg"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
        <span className="ml-3">Ousseyinou Diedhiou</span>
      </div>
    </div>
  );
};

export default Header;
