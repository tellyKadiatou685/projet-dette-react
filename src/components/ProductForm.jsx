import React from 'react';
import Input from './Input';
import Button from './Button';


const ProductForm = ({ newProduct, setNewProduct, onCancel, onSave }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Ajouter un nouveau produit</h2>

      {/* Champ Libellé */}
      <div className="mb-4">
        <label className="block mb-2">Libellé</label>
        <Input
          placeholder="Libellé"
          value={newProduct.libelle}
          onChange={(e) => setNewProduct({ ...newProduct, libelle: e.target.value })}
        />
      </div>

      {/* Champ Prix Unitaire */}
      <div className="mb-4">
        <label className="block mb-2">Prix Unitaire</label>
        <Input
          placeholder="Prix Unitaire"
          value={newProduct.prixUnitaire}
          onChange={(e) => setNewProduct({ ...newProduct, prixUnitaire: e.target.value })}
        />
      </div>

      {/* Champ Quantité */}
      <div className="mb-4">
        <label className="block mb-2">Quantité</label>
        <Input
          placeholder="Quantité"
          value={newProduct.quantite}
          onChange={(e) => setNewProduct({ ...newProduct, quantite: e.target.value })}
        />
      </div>

      {/* Champ Prix Détails */}
      <div className="mb-4">
        <label className="block mb-2">Prix Détails</label>
        <Input
          placeholder="Prix Détails"
          value={newProduct.prixDetails}
          onChange={(e) => setNewProduct({ ...newProduct, prixDetails: e.target.value })}
        />
      </div>

      {/* Sélecteur de Catégorie */}
      <div className="mb-4">
        <label className="block mb-2">Catégorie</label>
        <select
          value={newProduct.categorie}
          onChange={(e) => setNewProduct({ ...newProduct, categorie: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="Alimentaire">Alimentaire</option>
          <option value="Cosmetique">Cosmetique</option>
          <option value="Electronique">Electronique</option>
        </select>
      </div>

      {/* Boutons */}
      <div className="flex justify-end space-x-4">
        <Button text="Annuler" className="bg-red-500" onClick={onCancel} />
        <Button text="Enregistrer" className="bg-blue-500" onClick={onSave} />
      </div>
    </div>
  );
};

export default ProductForm;
