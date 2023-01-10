import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Input from '../commons/Input.jsx';
import { getData } from '../services/firebase';

const Answers = () => {
  const { fullName } = useParams();
  const [answers, setAnswers] = useState({});
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    getData(fullName, setAnswers, setKeys);
  }, []);

  return (
    <div className='antialiased text-gray-900 px-6 bg-red-600/[.6] min-h-screen'>
      <div className='max-w-xl mx-auto py-12 divide-y md:max-w-4xl'>
        <div className='mb-5 '>
          <Link to={'/'}>Back to the Survey</Link>
        </div>
        <div className='mb-5 pt-5 text-center text-lg'>
          Answers
        </div>
        <div className='py-8'>
          <form className='grid grid-cols-1 gap-6'>
            {keys.map(key => (
              <Input
                key={key}
                name={key}
                label={key}
                value={answers[key]}
                type={'text'}
                readOnly={true}
              />
            ))}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Answers;
