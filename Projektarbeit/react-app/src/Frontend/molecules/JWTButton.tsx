import "../css/App.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { Fingerprint } from "@mui/icons-material";

export default function jwt() {
  return (
    <div>
      <IconButton
        className="jwtBtn"
        aria-label="fingerprint"
        size="large"
        color="success"
        onClick={() => {
          alert("JWT: \n" + localStorage.getItem("token"));
        }}
      >
        <Fingerprint className="fingerprint" fontSize="large" />
      </IconButton>
    </div>
  );
}
