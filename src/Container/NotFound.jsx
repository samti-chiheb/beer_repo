import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  // Go back to the previous page when the button is clicked
  const handleGoBack = () => {
    navigate(-1);
  };

  // render the 404 page
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default NotFound