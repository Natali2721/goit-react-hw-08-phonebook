import { Contacts } from 'pages/Contacts';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout.js/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="register" element={<Register />} />

          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
