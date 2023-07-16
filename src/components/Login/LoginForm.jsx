import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import background from '../../images/background.jpg';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (!email || !password) {
      setError('Будь ласка заповніть усі поля');
      return;
    }

    try {
      await dispatch(logIn({ email, password }));

      setEmail('');
      setPassword('');
    } catch (error) {
      setError('Неправильний логін чи пароль');
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        resizeMode: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5rem',
        }}
      >
        <h4 style={{color: 'white'}}>Вхід</h4>

        {error && <p>{error}</p>}

        <form
          onSubmit={handleSubmit}
          autoComplete="on"
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '400px',
          }}
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            label="Email"
            placeholder="Введіть адресу електронної скриньки"
            required
          />

          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            label="Password"
            placeholder="Введіть пароль"
            required
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <button type="submit" style={{backgroundColor: 'purple', color: 'white', width: 400, height: 30, fontSize: 22}}>Увійти</button>
            <Link
              to="/register"
              style={{ color: 'purple', textDecoration: 'none', textAlign: 'center' }}
            >
              Немає облікового запису? Зареєструйтеся
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
