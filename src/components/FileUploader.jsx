// src/components/FileUploader.jsx
import React from 'react';

const FileUploader = () => (
    <div className="mb-4">
        <label className="flex items-center mb-2 text-gray-700">
            <i className="icon-photo mr-2"></i> Photo
        </label>
        <input
            type="file"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
    </div>
);

export default FileUploader;
