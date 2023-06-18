import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>404 Page Not Found</h1>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default NotFound