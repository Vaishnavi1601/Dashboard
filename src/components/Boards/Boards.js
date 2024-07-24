import React from "react";
import "../../styles/card.css";
import { colors, Typography } from "@mui/material";
import rightArrow from "../../icons8-right-24.png";
function Boards() {

  const textStyle = {
    fontSize: "25px",
    fontWeight: 700,
    lineHeight: "46.96px",
    textAlign: "left",
    
  };
  const numStyle = {
    color: "#4690FF",
    fontSize: "30px",
    fontWeight: 700,
  };

  return (
    <div className="boards">
      <div className="card">
        <Typography style={numStyle} className="num">04</Typography>
        <div className="textBoard">
          <Typography style={{ ...textStyle, marginLeft: '35px',marginTop:"20px" }}>Incident reported</Typography>
          <div>
            <img src={rightArrow} alt="Right Arrow" className="rightArrow"/>
          </div>
        </div>
      </div>
      <div className="card">
        <Typography style={numStyle} className="num">06</Typography>
        <div className="textBoard">
          <Typography style={{ ...textStyle, marginLeft: '35px',marginTop:"20px"}}>Check In</Typography>
          <div>
            <img src={rightArrow} alt="Right Arrow" className="rightArrow"/>
          </div>
        </div>
      </div>
      <div className="card">
        <Typography style={numStyle} className="num">03 / 05</Typography>
        <div className="textBoard">
          <Typography style={{ ...textStyle, marginLeft: '35px',marginTop:"20px"}}>Services open</Typography>
          <div>
            <img src={rightArrow} alt="Right Arrow" className="rightArrow"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boards;
