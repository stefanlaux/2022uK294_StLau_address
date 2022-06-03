import React from "react";
import "../css/App.css";

interface props {
  useOnClick: boolean;
}

export default function redButton({ useOnClick }: props) {
  return (
    <div>
      <a href="/home">
        <button
          onClick={() => {
            if (useOnClick) {
              const pathname = window.location.pathname;
              
            }
          }}
          className="headerButton delete"
        >
          <img
            className="deletePicture"
            src="https://img.icons8.com/fluency-systems-regular/344/delete-sign--v1.png"
            alt="Delete Button / BackButton"
          />
        </button>
      </a>
    </div>
  );
}
