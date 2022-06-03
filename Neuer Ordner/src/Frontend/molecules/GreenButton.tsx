import React from "react";
import "../css/App.css";

export default function greenButton() {
  return (
    <div>
      <a href="/create">
        <button className="headerButton">
          <img
            className="headerPicture"
            src="https://img.icons8.com/fluency-systems-regular/344/delete-sign--v1.png"
            alt=""
          />
        </button>
      </a>
    </div>
  );
}
