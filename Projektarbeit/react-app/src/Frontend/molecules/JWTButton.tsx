import "../css/App.css";
import React from "react";
import { Link } from "react-router-dom";

export default function jwt() {
  return (
    <div>
      <a href="https://jwt.io/">
        <button className="jwtBtn" type="button">
          <img
            className="jwt"
            src="https://vegibit.com/wp-content/uploads/2018/07/JSON-Web-Token-Authentication-With-Node.png"
            alt="JWT Logo"
          ></img>
        </button>
      </a>
    </div>
  );
}
