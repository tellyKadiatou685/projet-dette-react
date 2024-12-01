// src/components/Sidebar.js
import { Home, DollarSign, Users, Package, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = [
    { name: 'Dashboard', icon: Home, path: '/dashboard' },
    { name: 'Dettes', icon: DollarSign, path: '/dettes' },
    { name: 'Clients', icon: Users, path: '/clients' },
    { name: 'Articles', icon: Package, path: '/articles' },
    { name: 'Demandes', icon: Mail, path: '/demandes' },
    { name: 'Utilisateurs', icon: Users, path: '/utilisateurs' },
  ];

  return (
    <div className="w-64 h-screen bg-[#1e4976] text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8 text-center">GESTION BOUTIQUE</h1>
        <ul>
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index} className="mb-6">
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                    activeIndex === index ? 'bg-gray-700' : 'hover:bg-gray-600'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <Icon className="w-6 h-6 text-white" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
