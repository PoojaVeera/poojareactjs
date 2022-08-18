import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import pooh from "../../assests/pooh.jpg";
const Sidebar = () => {
  return (
    <div className="ss">
      <img src={pooh} alt="pooh"></img>
      <p>this is sidebar </p>
      <ul className="pp">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/submit">submit</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
