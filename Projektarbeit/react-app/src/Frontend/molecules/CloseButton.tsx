import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import "../css/App.css";

export default function CloseButton() {
  return (
    <div>
      <a href="/home">
        <IconButton className="headerButton" size="large">
          <Close className="fingerprint" color="error" fontSize="large" />
        </IconButton>
      </a>
    </div>
  );
}
