import { useState } from 'react';
import { useAuth } from 'redux/auth/useAuth';

const ErrorPage = () => {
  const { error } = useAuth();
  const [isReloading, setIsReloading] = useState(false);

  const handleGoHome = () => {
    setIsReloading(true);
    window.location.reload();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <h4 style={{ marginBottom: 2 }}>
        Something went wrong!
      </h4>
      <p>
        Maybe you typed something wrong?
      </p>
      {isReloading ? (
        <div>Завантаження...</div>
      ) : (
        error && (
          <button
            style={{ marginTop: 2, minWidth: 120, padding: 1 }}
            onClick={handleGoHome}
          >
           Try again
          </button>
        )
      )}
    </div>
  );
};

export default ErrorPage;
