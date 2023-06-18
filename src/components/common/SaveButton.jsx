import React, { useEffect, useState } from "react";
import ApiHandler from "../../utils/ApiHandler";
import ShowAlert from "./ShowAlert";

const SaveButton = ({ id, name }) => {
  const [alert, setAlert] = useState({
    alertMessage: "",
    alertType: "",
    isVisible: false,
  });

  const handleClick = () => {
    // handle save beer api
    const fetchBeer = async () => {
      try {
        const api = new ApiHandler();
        await api.saveBeer(id, name);
        setAlert({
          alertMessage: "Beer saved successfully",
          alertType: "success",
          isVisible: true,
        });
      } catch (error) {
        setAlert({
          alertMessage: "Beer saved failed",
          alertType: "error",
          isVisible: true,
        });
        console.error("Error fetching beer:", error);
      }
    };

    fetchBeer();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert((prevState) => ({
        ...prevState,
        isVisible: false,
      }));
    }, 3000);

    return () => clearTimeout(timer);
  }, [alert.isVisible]);

  return (
    <>
      <ShowAlert alert={alert} />
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default SaveButton;
