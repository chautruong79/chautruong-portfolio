import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";

const Logo = (props) => {
  return (
    <div className="z ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-4"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3 ">
          {" "}
          <img
            style={{
              paddingTop: "9px",
              paddingLeft: "7px",
              borderRadius: "50%",
              boxShadow: "5px",
            }}
            src={props.image}
            alt="logo"
          />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
