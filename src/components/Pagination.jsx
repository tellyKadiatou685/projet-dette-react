import React from 'react';
import Button from '../components/Button';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex justify-end mt-4 space-x-2">
      {/* Bouton Précédent */}
      <Button
        text="<"
        onClick={() => onPageChange(currentPage - 1)}
        className="bg-gray-300 hover:bg-gray-400 text-gray-700"
        disabled={currentPage === 1}
      />
      
      {/* Boutons de Pages */}
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index + 1}
          text={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`${
            currentPage === index + 1
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-700'
          } hover:bg-blue-400`}
        />
      ))}

      {/* Bouton Suivant */}
      <Button
        text=">"
        onClick={() => onPageChange(currentPage + 1)}
        className="bg-gray-300 hover:bg-gray-400 text-gray-700"
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default Pagination;
