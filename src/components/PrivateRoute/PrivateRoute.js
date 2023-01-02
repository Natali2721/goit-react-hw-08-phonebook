import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div {...routeProps}>
      {isLoggedIn ? <div>{children}</div> : <Navigate to={redirectTo} />}
    </div>
  );
}
