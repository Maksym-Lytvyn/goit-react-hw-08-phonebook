import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { Link } from 'react-router-dom';
import Icon from 'awesome-react-icons';
import avatar from '../../images/avatar-default-user.png'
// import { changeData } from '../../redux/auth/slice';



const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <img style={{ width: 32, height: 32, borderRadius: '50%' }} src={avatar} alt='bobo'/>
      <Link style={{marginRight: 10}} to='/contacts/profile'> {user.name} він же {user.nickname}</Link>
      <button onClick={onLogout} style={{ backgroundColor: 'purple', color: 'white', width: 100, height: 30, fontSize: 12}}>
        <Icon name='log-out' stroke='red' />
      </button>
    </div>
  );
};

export default UserMenu;


