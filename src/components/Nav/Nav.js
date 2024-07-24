import React from "react";
import "../../styles/nav.css";
import backArrow from "../../icons8-left-24.png";
import downArrow from "../../icons8-down-arrow-16.png";
import qrCode from "../../icons8-qr-code-24.png";
import bell from "../../icons8-bell-48.png";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function Nav() {
  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: "50px",
    textTransform: "none",
    padding: theme.spacing(1, 2),
    color: "#1B2535",
    height: "44px",
    width: "185px",
  }));

  const BlackCircle = styled("div")({
    backgroundColor: "black",
    borderRadius: "50%",
    width: "38px",
    height: "38px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  });

  const WhiteCircle = styled("div")({
    backgroundColor: "white",
    borderRadius: "50%",
    width: "54px",
    height: "54px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "8px",
  });

  const textStyle = {
    fontSize: "40px",
    fontWeight: 700,
  };

  return (
    <div className="wrap">
      <div className="icon-container">
      <div className="circle-icon">
        <img src={backArrow} alt="Back Arrow" className="icon" />
        </div>
      </div>
      <div style={{...textStyle,position:"relative", left:"-45px"}}>Incidents.</div>
      <div className="buttons">
        <StyledButton>
          <BlackCircle style={{marginLeft:"-11px", marginRight:"17px"}}> 
            <Typography variant="body2" style={{ color: "white" }}>
              B
            </Typography>
          </BlackCircle>
          Non Bio Medical
        </StyledButton>

        <StyledButton style={{display:"flex", justifyContent:"space-evenly"}}>
          Vijaynagar
          <img src={downArrow} alt="Down Arrow" />
        </StyledButton>
        <WhiteCircle>
          <img src={qrCode} alt="QR Code" className="icon" />
        </WhiteCircle>
        <WhiteCircle>
          <img src={bell} alt="Bell" className="icon" />
        </WhiteCircle>
        <BlackCircle style={{marginRight: "48px"}}>
          <Typography variant="body2" style={{ color: "white" }}>
            A
          </Typography>
        </BlackCircle>
      </div>
    </div>
  );
}
