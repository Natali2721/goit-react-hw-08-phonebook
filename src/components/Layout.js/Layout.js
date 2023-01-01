import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="contacts">Contacts</NavLink>
          <NavLink to="register">Sign up</NavLink>
          <NavLink to="login">Log In</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
