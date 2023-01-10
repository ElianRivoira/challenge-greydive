import React from 'react';

const Input = ({ name, label, type, required, value, readOnly }) => {
  return (
    <>
      <label htmlFor={name} className='text-gray-700'>
        {label}
      </label>
      <input
        className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
        type={type}
        name={name}
        required={required || false}
        value={value}
        readOnly={readOnly || false}
      />
    </>
  );
};

export default Input;
