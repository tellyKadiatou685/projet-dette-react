import { DollarSign, Users, Package, MessageSquare } from 'lucide-react';
import React from 'react';

export const statsData = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Total des Dettes",
    value: "500.000 CFA",
    change: "+3.5%",
    period: "depuis le mois dernier"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Nombre de Clients",
    value: "120",
    change: "+5%",
    period: "depuis la semaine dernière"
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Articles en Stock",
    value: "250",
    change: "-2%",
    period: "depuis hier"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Demandes en Cours",
    value: "15",
    change: "+10%",
    period: "depuis hier"
  }
];

export const clientsData = {
  headers: ["Nom", "Prénom", "Telephone", "Montant Dette"],
  data: [
    { nom: "John", prenom: "Doe", telephone: "77 123 45 67", montant: "45000 FCFA" },
    { nom: "Amina", prenom: "Diop", telephone: "78 987 65 43", montant: "35000 FCFA" },
  ]
};

export const stockData = {
  headers: ["Article", "Quantité Restante", "prix"],
  data: [
    { article: "Savon", quantite: "0", prix: "300 FCFA" },
    { article: "Shampooing", quantite: "2", prix: "2020 FCFA" },
  ]
};