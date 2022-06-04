import { Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import "../css/App.css";

export default function createButton() {
  return (
    <div>
      <a href="/create">
       <IconButton className="headerButton" size="large">
         <Add className="fingerprint" color="success" fontSize="large"/>
       </IconButton>
      </a>
    </div>
  );
}
