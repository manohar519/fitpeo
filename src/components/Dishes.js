import React from "react";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import HomeMiniIcon from "@mui/icons-material/HomeMini";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./grid4.css";
import { IconButton } from "@mui/material";
const Dishes = () => {
  return (
    <div
      className="grid-4"
      style={{
        alignContent: "center",
        width: "100%",
        height: 250,
        maxWidth: 400,
        boxShadow: "0 6px 8px #bbb9b9ec",
        borderRadius: 10,
        margin: 10,
      }}
    >
      <div className="min-grid-4">
        <span>
          <IconButton style={{ backgroundColor: "#f6baba" }}>
            <GpsFixedIcon style={{ color: "red" }} />
          </IconButton>{" "}
          <p>Goals</p>
        </span>

        <KeyboardArrowRightIcon style={{ backgroundColor: "#b7b7b7",borderRadius:30 }} />
      </div>
      <div className="min-grid-4">
        <span>
          <IconButton style={{ backgroundColor: "#afbcfd" }}>
            <LunchDiningIcon style={{ color: "blue" }} />
          </IconButton>{" "}
          <p> Popular Dishes</p>
        </span>

        <KeyboardArrowRightIcon style={{ backgroundColor: "#b7b7b7",borderRadius:30 }}/>
      </div>
      <div className="min-grid-4">
        <span>
          <IconButton style={{ backgroundColor: "#92e9e7" }}>
            <HomeMiniIcon style={{ color: "#02B2AF" }} />
          </IconButton>{" "}
          <p>Menus</p>{" "}
        </span>

        <KeyboardArrowRightIcon style={{ backgroundColor: "#b7b7b7",borderRadius:30 }} />
      </div>
    </div>
  );
};

export default Dishes;
