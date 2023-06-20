import React from "react";

const ShowAlert = ({ alert }) => {
  // Destructure the properties from the alert object
  const { alertMessage, alertType, isVisible } = alert;
  
  return (
    <>
      <div style={{ display: isVisible ? "block" : "none" }}>
        <div className={`save-message ${alertType}`}>
          <p>{alertMessage}</p>
        </div>
      </div>
    </>
  );
};

export default ShowAlert;
