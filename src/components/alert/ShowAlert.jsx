import React, { useEffect, useState } from "react";
import { Alert } from "./Alert.style";

const ShowAlert = ({ alert, onClose }) => {
  const { alertMessage, alertType } = alert;
  const [isVisible, setIsVisible] = useState(alert.isVisible);

  useEffect(() => {
    setIsVisible(alert.isVisible);
    if (alert.isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [alert.isVisible, onClose]);

  return (
    <Alert $isVisible={isVisible} $alertType={alertType}>
      <p>{alertMessage}</p>
    </Alert>
  );
};

export default ShowAlert;
