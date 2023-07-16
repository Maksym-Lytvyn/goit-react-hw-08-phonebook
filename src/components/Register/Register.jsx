import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/operations';
import background from '../../images/background.jpg';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await dispatch(signUp({ name, email, password }));

      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div >
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
        <h4 style={{color: 'white'}}>
          Реєстрація
        </h4>

        {error && (
          <p>
            {error}
          </p>
        )}

        <form
          component="form"
          onSubmit={handleSubmit}
          autoComplete="on"
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: 400,
          }}
        >
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            label="Name"
            placeholder="Введіть ім'я"
            required
          />

          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            placeholder="Введіть адресу електронної скриньки"
            required
          />

          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            placeholder="Введіть пароль"
            required
          />

          <button type="submit" style={{ backgroundColor: 'purple', color: 'white', width: 400, height: 30, fontSize: 22}}>
            Зареєструватися
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
