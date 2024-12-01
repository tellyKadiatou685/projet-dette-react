import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import DataTable from '../components/tables/DataTable';
import Pagination from '../components/Pagination';
import Modal from '../components/Modal';
import ProductForm from '../components/ProductForm';

const ArticlesPage = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    libelle: '',
    prixUnitaire: '',
    quantite: '',
    prixDetails: '',
    catégorie: 'Alimentaire',
  });

  const products = [
    { article: 'Chocolat', prix: 2000, stock: 5 },
    // Ajout d'autres produits ici
  ];

  const headers = ['', 'Article', 'Prix', 'Qte en stock'];
  const selectedHeaders = ['Article', 'Prix', 'Quantité', 'Action'];

  const filteredProducts = products.filter(product =>
    product.article.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectProduct = (product) => {
    if (!selectedProducts.some(p => p.article === product.article)) {
      setSelectedProducts([...selectedProducts, { ...product, quantite: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    setSelectedProducts(selectedProducts.filter(p => p.article !== product.article));
  };

  const increaseQuantity = (product) => {
    setSelectedProducts(selectedProducts.map(p =>
      p.article === product.article ? { ...p, quantite: p.quantite + 1 } : p
    ));
  };

  const decreaseQuantity = (product) => {
    setSelectedProducts(selectedProducts.map(p =>
      p.article === product.article && p.quantite > 1 ? { ...p, quantite: p.quantite - 1 } : p
    ));
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const onSelectedPageChange = (page) => {
    setSelectedPage(page);
  };

  const handleSaveProduct = () => {
    setIsModalOpen(false);
    console.log('Produit enregistré :', newProduct);
  };

  const total = selectedProducts.reduce((acc, produit) => acc + produit.prix * produit.quantite, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Approvisionnement</h1>
      <div className="flex space-x-6">
        {/* Section de la liste des produits */}
        <div className="w-1/2 border rounded p-4 bg-white shadow-md">
          <h2 className="text-xl font-semibold mb-4">Lister les produits</h2>
          <div className="flex space-x-4 mb-4">
            <Button text="RUP" className="bg-red-500" />
            <Button text="DIS" className="bg-gray-500" />
            <Button text="ALL" className="bg-gray-500" />
          </div>
          <div className="mb-4">
            <Input placeholder="libelle" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className="border-t border-b">
            <DataTable
              title=""
              headers={headers}
              data={filteredProducts.map(product => ({
                select: (
                  <input
                    type="checkbox"
                    checked={selectedProducts.some(p => p.article === product.article)}
                    onChange={() => handleSelectProduct(product)}
                  />
                ),
                article: product.article,
                prix: product.prix,
                stock: product.stock,
              }))}
              className="mt-4"
            />
          </div>
          <div className="flex justify-center mt-4">
            <Pagination totalPages={2} currentPage={currentPage} onPageChange={onPageChange} />
          </div>
        </div>

        {/* Section des produits sélectionnés */}
        <div className="w-1/2 border rounded p-4 bg-white shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Liste de produits sélectionnés</h2>
            <Button text="Nouvel Article" className="bg-blue-500" onClick={() => setIsModalOpen(true)} />
          </div>
          <p className="mb-4">Total : {total}</p>
          <div className="border-t border-b">
            <DataTable
              title=""
              headers={selectedHeaders}
              data={selectedProducts.map(product => ({
                article: product.article,
                prix: product.prix,
                quantite: (
                  <div className="flex items-center">
                    <button onClick={() => decreaseQuantity(product)}>-</button>
                    <span className="mx-2">{product.quantite}</span>
                    <button onClick={() => increaseQuantity(product)}>+</button>
                  </div>
                ),
                action: (
                  <Button
                    text="Supprimer"
                    className="bg-red-500"
                    onClick={() => handleRemoveProduct(product)}
                  />
                ),
              }))}
            />
          </div>
          <div className="flex justify-center mt-4">
            <Pagination totalPages={2} currentPage={selectedPage} onPageChange={onSelectedPageChange} />
          </div>
          <Button text="SAVE" className="bg-blue-500 mt-4" />
        </div>
      </div>

      {/* Intégration du Modal avec le formulaire */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProductForm
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          onCancel={() => setIsModalOpen(false)}
          onSave={handleSaveProduct}
        />
      </Modal>
    </div>
  );
};

export default ArticlesPage;
