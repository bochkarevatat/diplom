import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { TreepPage } from './pages/TreepPage';
import { ChoiceOfLocation} from './pages/ChoiceOfLocation';
// import { Createpost } from './pages/Createpost';
// import { Editpost } from './pages/Editpost';
// import { Singlepage } from './pages/Singlepage';
import { NotFoundPage } from './pages/NotFoundPage';
// import { LoginPage } from './pages/Loginpage';

import { Layout } from './components/Layout'

// import { RequireAuth } from './hoc/RequireAuth'
// import { AuthProvider } from './hoc/AuthProvider'

function App() {

  // const [searchValue, setSearchValue] = React.useState('')
  // console.log(searchValue, "изменения инпута в app")
  return (
   
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="about" element={<TreepPage />}/>
      <Route path="choicelocation" element={<ChoiceOfLocation />}> 
        {/* <Route path="contacts" element={<p>Our contact</p>} />
        <Route path="team" element={<p>Our team</p>} /> */}
      </Route>
      
      {/* <Route path="about-us" element={<Navigate to="/about" replace />} />
      <Route path="posts" element={<Blogpage />} />
      <Route path="posts/:id" element={<Singlepage />} />
      <Route path="posts/:id/edit" element={<Editpost />} /> */}
      {/* <Route path="posts/new" element={
        <RequireAuth>
          <Createpost />
        </RequireAuth>
      } /> */}
      {/* <Route path="login" element={<LoginPage />} /> */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>

   
  );
}

export default App;
