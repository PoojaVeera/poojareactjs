import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import pooh from "../../assests/pooh.jpg";
const Sidebar = (props) => {
  return (
    <div className="ss">
      <img src={pooh} alt="pooh"></img>
      <p>this is sidebar{props.data} </p>
      <ul className="pp">
        <li />
        <Link to="/">home</Link>
        <li />
        <Link to="/about">about</Link>
        <li />
        <Link to="/submit">submit</Link>
      </ul>
    </div>
  );
};

export default Sidebar;
