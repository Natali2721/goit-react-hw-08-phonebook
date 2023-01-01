import { Route, Routes } from 'react-router-dom';

import { Contacts } from './Contacts/Contacts';
import Home from './Home/Home';
import Layout from './Layout.js/Layout';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
