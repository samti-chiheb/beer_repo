import React from "react";
import useSaveBeer from "../../hook/useSaveBeer";
import ShowAlert from "../alert/ShowAlert";
import { StyledButton } from "../../components";

const SaveButton = ({ id, name }) => {
  const { loading, alert, saveBeer, clearAlert } = useSaveBeer();

  const handleAlertClose = () => {
    clearAlert();
  };

  return (
    <>
      <ShowAlert alert={alert} onClose={handleAlertClose} />
      <StyledButton onClick={() => saveBeer(id, name)} disabled={loading}>
        Save it
      </StyledButton>
    </>
  );
};

export default SaveButton;
