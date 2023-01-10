import React, { useReducer, useState, useEffect } from 'react';
import axios from 'axios';

import Modal from '../components/Modal.jsx';
import Form from '../components/Form.jsx';
import { setData } from '../services/firebase.js';

const Survey = () => {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [answersLink, setAnswersLink] = useState('');
  const [inputValues, setInputValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      country_of_origin: 'argentina',
    }
  );

  const getJsonData = async () => {
    const res = await axios.get('db/db.json');
    setItems(res.data.items);
  };

  const handleOnChange = event => {
    const { name, type, value } = event.target;
    if (type === 'checkbox') {
      setInputValues({ [name]: event.target.checked });
    }
    setInputValues({ [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();

    console.log(inputValues);
    setData(inputValues);
    setIsOpen(true);
    const fullName = inputValues.full_name.split(' ').join('_');
    setAnswersLink(`answers/${fullName}`);
  };

  useEffect(() => {
    getJsonData();
  }, []);

  return (
    <div className='antialiased text-gray-900 px-6 bg-red-600/[.6] min-h-screen'>
      <div className='max-w-xl mx-auto py-12 divide-y md:max-w-4xl'>
        <div className='mb-8 text-center text-lg'>GreyDive's Survey</div>
        <div className='py-8'>
          <Form
            items={items}
            onSubmit={onSubmit}
            handleOnChange={handleOnChange}
            inputValues={inputValues}
          />
        </div>
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          You can visualize your answers in the next{' '}
          <a href={answersLink} target='_blank' rel="noreferrer" className='underline decoration-red-400 text-red-400'>
            link
          </a>
        </Modal>
      </div>
    </div>
  );
};

export default Survey;
