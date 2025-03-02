import React from 'react';

const SavePopup = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#1A1039] rounded-lg p-6 w-80">
        <h2 className="text-white text-center text-xl mb-4">
          Do You Want to Save the Changes
        </h2>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onCancel}
            className="bg-transparent border border-white text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-white text-black px-4 py-2 rounded"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}

export default SavePopup;