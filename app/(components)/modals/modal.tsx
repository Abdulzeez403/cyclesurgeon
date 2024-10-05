import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={onClose}
      />

      {/* Centered Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-2 rounded-lg shadow-lg">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={onClose}
            >
              X
            </button>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
