import { useState } from "react";
import ApiHandler from "../utils/ApiHandler";

const useSaveBeer = () => {
  // set variables
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    alertMessage: "",
    alertType: "",
    isVisible: false,
  });

  // send the request the api handler
  const saveBeer = async (id, name) => {
    setLoading(true);

    //execute the request
    try {
      const api = new ApiHandler();
      await api.saveBeer(id, name);

      // manage user success alerts
      setAlert({
        alertMessage: "Beer saved successfully",
        alertType: "success",
        isVisible: true,
      });
    } catch (error) {
      // manage user success alerts
      setAlert({
        alertMessage: "Saving beer failed",
        alertType: "error",
        isVisible: true,
      });
    }

    setLoading(false);
  };

  const clearAlert = () => {
    setAlert({
      alertMessage: "",
      alertType: "",
      isVisible: false,
    });
  };

  return { loading, alert, saveBeer, clearAlert };
};

export default useSaveBeer;