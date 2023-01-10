import React from 'react';
import { createRoot } from 'react-dom/client';

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <>
      <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/[.75] z-50' />
      <div className='text-center fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 bg-white p-12 z-50'>
        {children}
        <button className='mt-4 border rounded-md w-2/4 bg-white border-red-400' onClick={onClose}>close</button>
      </div>
    </>
  );
};

export default Modal;
