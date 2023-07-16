import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import avatar from '../../images/avatar-default-user.png'



const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <img style={{ width: 32, height: 32, borderRadius: '50%' }} src={avatar} alt='bobo'/>
      <p style={{marginRight: 10}}>{user.name}</p>
      <button onClick={onLogout} style={{ backgroundColor: 'purple', color: 'white', width: 100, height: 30, fontSize: 22}}>
        Вийти
      </button>
    </div>
  );
};

export default UserMenu;


