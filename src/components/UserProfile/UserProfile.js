import { changeData } from '../../redux/auth/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Icon from 'awesome-react-icons/lib/cjs/Icon';
import overlayBackground from '../../images/overlayBackground.jpg';
import avatar from '../../images/avatar-default-user.png';

const UserProfile = () => {
  const [nickname, setNickname] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleFormResults = event => {
    event.preventDefault();
    console.log(`nickname: ${nickname}, address: ${address}`);
    const newData = {
      id: nanoid(),
      nickname: nickname.trim(),
      address: address.trim(),
    };
    dispatch(changeData(newData));
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    name === 'nickname' ? setNickname(value) : setAddress(value);
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
        backgroundImage: `url(${overlayBackground})`,
        backgroundSize: 'cover',
        resizeMode: 'cover',
        backgroundPosition: 'center',
        border: '2px solid black',
      }}
    >
      <img
        src={avatar}
        alt="Тут має бути фото вашого профілю"
        style={{
          width: 200,
          height: 200,
          borderRadius: 150,
          border: '2px solid black',
          marginBottom: 20,
        }}
      />
      <form onSubmit={handleFormResults}>
        <input
          value={nickname}
          onChange={handleInputChange}
          name="nickname"
          placeholder="Створіть свій псевдонім"
          style={{ width: 200, marginBottom: 5 }}
        />
        <input
          value={address}
          onChange={handleInputChange}
          name="address"
          placeholder="Введіть свою адресу"
          style={{ width: 200, marginBottom: 5 }}
        />
        <button style={{ width: 210 }} type="submit">
          Зберегти
        </button>
      </form>

      <div style={{display: 'flex', flexDirection: 'row'}}>
      {user.nickname && <Icon name="map-pin" stroke="red" style={{marginTop: 12, marginRight: 5}} />}  
        <p style={{color: 'purple'}}>{user.address}</p>
      </div>
    </div>
  );
};

export default UserProfile;
