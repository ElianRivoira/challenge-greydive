import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Answers from './pages/Answers.jsx';
import Survey from './pages/Survey.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/answers/:fullName' index element={<Answers />} />
        <Route path='/' index element={<Survey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
