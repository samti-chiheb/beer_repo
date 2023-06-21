import React from "react";
import { Alert } from "../styles/Alert.style";

const ShowAlert = ({ alert }) => {
  const { alertMessage, alertType, isVisible } = alert;

  return (
    <Alert $isVisible={isVisible} $alertType={alertType}>
      <p>{alertMessage}</p>
    </Alert>
  );
};

export default ShowAlert;
