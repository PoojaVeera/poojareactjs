import React from "react";
import "./footer.css";

const Footer = (props) => {
  return (
    <div className="ff">
      <h1>this is Footer</h1>
      <p>{props.data1}</p>
    </div>
  );
};
export default Footer;
