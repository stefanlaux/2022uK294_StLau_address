import React from "react";
import DeleteService from "../../Service/DeleteService";
import "../css/App.css";

interface props {
  useOnClick: boolean;
}

export default function create({ useOnClick }: props) {
  return (
    <div>
      <a href="/home">
        <button
          onClick={() => {
            if (useOnClick) {
              const pathname = window.location.pathname;
              DeleteService(pathname);
            }
          }}
          className="headerButton delete"
        >
          <img
            className="deletePicture"
            src="https://www.flaticon.com/svg/vstatic/svg/3917/3917163.svg?token=exp=1654175135~hmac=df9b3d69adb75423069e85da65804865"
            alt="Delete Button / BackButton"
          />
        </button>
      </a>
    </div>
  );
}
