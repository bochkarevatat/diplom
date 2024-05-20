import React from 'react';
import { Routes, Route} from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { TreepPage } from './pages/TreepPage';
import { ChoiceOfLocation} from './pages/ChoiceOfLocation';
import {SuccesfullOrder} from './pages/SuccesfullOrder';
import { NotFoundPage } from './pages/NotFoundPage';
import {OrderTickets}  from './pages/OrderTickets';
import {CheckTickets} from './pages/CheckTickets';
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
      <Route path="pay" element={<PayTickets />} /> 
      <Route path="check" element={<CheckTickets />}> 
     
      </Route>
      
      <Route path="*" element={<NotFoundPage />} />
     
    </Route>
    <Route path="succesfull" element={<SuccesfullOrder/>}/>
  </Routes>

   
  );
}

export default App;