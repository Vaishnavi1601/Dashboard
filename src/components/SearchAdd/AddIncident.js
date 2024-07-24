import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function AddIncident() {
  return (
    <div
      style={{
        width: "316px",
        height: "75px",
        backgroundColor: "white",
        marginTop: "70px",
        marginLeft: "60px",
        display: "flex",
        position:"relative",
        left:"7px"
      }}
    >
      <Button
        variant="contained"
        endIcon={<AddIcon />}
        style={{
          backgroundColor: "#4690FF",
          borderRadius: "50px",
          color: "white",
          height: "44px",
          marginTop: "16px",
          marginLeft: "140px"
        }}
      >
        Add Incident
      </Button>
    </div>
  );
}

export default AddIncident;
