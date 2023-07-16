import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{  display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center'}}>
      <h1 style={{ fontSize: 32, color: '#333' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: 18,  color: '#555' }}>The requested page could not be found.</p>
      <Link to="/" style={{ fontSize: 16, color: 'orange', textDecoration: 'none' }}>Go back to the homepage</Link>
    </div>
  );
};

export default NotFound;