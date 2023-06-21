import React, { useEffect, useState } from "react";
import ApiHandler from "../../utils/ApiHandler";
import ShowAlert from "./ShowAlert";
import { StyledButton } from "../styles/Button.style";

const SaveButton = ({ id, name }) => {
  const [loading, setLoading] = useState(false)
  // set alert object
  const [alert, setAlert] = useState({
    alertMessage: "",
    alertType: "",
    isVisible: false,
  });

  // handle save beer api
  const fetchBeer = async () => {
    setLoading(true)
    // fetch data
    try {
      const api = new ApiHandler();
      await api.saveBeer(id, name);

      // handle alert message
      setAlert({
        alertMessage: "Beer saved successfully",
        alertType: "success",
        isVisible: true,
      });
    } catch (error) {
      //handle alert message
      setAlert({
        alertMessage: "saving beer failed",
        alertType: "error",
        isVisible: true,
      });
      console.error("Error fetching beer:", error);
    }
    setLoading(false);
  };

  // execute the save beer api
  const handleClick = () => {
    fetchBeer();
  };

  // handle alert diplayed timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert({
        alertMessage: "",
        alertType: "",
        isVisible: false,
      });
    }, 2000);

    // clear timeout
    return () => clearTimeout(timer);
  }, [alert.isVisible]);

  // render the alert component
  return (
    <>
      <ShowAlert alert={alert} />
      <StyledButton onClick={handleClick} disabled={loading}>
        Save it
      </StyledButton>
    </>
  );
};

export default SaveButton;
