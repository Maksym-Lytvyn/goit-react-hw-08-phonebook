import { useNavigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/useAuth';
import Notiflix from 'notiflix';
import background from '../../images/background.jpg';

const Home = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate('/contacts');
    } else {
      Notiflix.Notify.failure('Будь ласка увійдіть у свій обліковий запис чи зареєструйтеся')
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
        fontSize: 40,
        color: '#010101',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        resizeMode: 'cover',
        backgroundPosition: 'center',
      }}
    >
       <span style={{ color: '#ffffff', padding: '20px', textAlign: 'center'}}>Контакти ніколи не забуваються... З нами - тим більше!</span>
      <button onClick={handleButtonClick} style={{ backgroundColor: 'purple', color: 'white', width: 150, height: 30, fontSize: 22}}>
        Розпочати
      </button>
    </div>
  );
};

export default Home;
