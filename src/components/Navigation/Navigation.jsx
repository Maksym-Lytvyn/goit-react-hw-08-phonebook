import { NavLink } from 'react-router-dom';
import { useAuth } from 'redux/auth/useAuth';



const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav style={{
      display: 'flex',
      gap: 20,
    }}>
      <NavLink to="/" style={{color: 'purple', textDecoration: 'none'}}>Головна</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Контакти</NavLink>}
    </nav>
  );
};

export default Navigation;
