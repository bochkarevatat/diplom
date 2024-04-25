import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { TreepPage } from './pages/TreepPage';
import { ChoiceOfLocation} from './pages/ChoiceOfLocation';

import { NotFoundPage } from './pages/NotFoundPage';
import {OrderTickets}  from './pages/OrderTickets';

import {PayTickets}  from './pages/PayTickets';
import { Layout } from './components/Layout'


function App() {

  
  return (
   
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="about" element={<TreepPage />}/>
      <Route path="choicelocation" element={<ChoiceOfLocation />} /> 
      <Route path="ordertickets" element={<OrderTickets />} /> 
      <Route path="pay" element={<PayTickets />}> 
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>

   
  );
}

export default App;
