import React from 'react'

const Form = ({items, onSubmit, handleOnChange, inputValues}) => {
  return (
    <form onSubmit={onSubmit} className='grid grid-cols-1 gap-6'>
      {items.map((item, id) => {
        return (
          <div key={id} className='block'>
            {item.type === 'select' ? (
              <>
                <label htmlFor={item.name} className='text-gray-700'>
                  {item.label}
                </label>
                <select
                  name={item.name}
                  required={item.required}
                  className='block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg0white focus:ring-0'
                  onChange={handleOnChange}
                >
                  {item.options.map((opt, id) => (
                    <option key={id} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </>
            ) : item.type === 'checkbox' ? (
              <>
                <input
                  className='rounded bg-gray-200 border-transparent focus:border-transparent focus:border-gray-200 text-gray-700 focus:ring-offset-2 focus:ring-1 focus:ring-grey-500'
                  type={item.type}
                  name={item.name}
                  required={item.required}
                  onChange={handleOnChange}
                />
                <label htmlFor={item.name} className='text-gray-700 ml-2'>
                  {item.label}
                </label>
              </>
            ) : item.type === 'submit' ? (
              <input
                  className='rounded w-2/5 bg-gray-100 border-transparent text-gray-700 focus:ring-offset-2'
                  type={item.type}
                  name={item.label}
                />
            ) : (
              <>
                <label htmlFor={item.name} className='text-gray-700'>
                  {item.label}
                </label>
                <input
                  className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
                  type={item.type}
                  name={item.name}
                  required={item.required}
                  value={inputValues[item.name]}
                  onChange={handleOnChange}
                />
              </>
            )}
          </div>
        );
      })}
    </form>
  )
}

export default Form