import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../components'

const NotFound = () => {
  const navigate = useNavigate();

  // Go back to the previous page when the button is clicked
  const handleGoBack = () => {
    navigate(-1);
  };

  // render the 404 page
  return (
    <div className="not-found">
      <h1>404 Page Not Found</h1>
      <StyledButton onClick={handleGoBack}>Go Back</StyledButton>
    </div>
  );
};

export default NotFound