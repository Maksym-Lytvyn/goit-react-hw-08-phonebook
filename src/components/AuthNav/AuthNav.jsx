import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <NavLink style={{color: 'purple', textDecoration: 'none'}} to="/register">Зареєструватися</NavLink>
      <NavLink style={{color: 'purple', textDecoration: 'none'}} to="/login">Увійти</NavLink>
    </div>
  );
};

export default Navigation;
