import { Button } from "@mui/material";
import {Delete, Update} from "@mui/icons-material";
import React from "react";
import '../css/App.css';

export default function deleteButton() {
    return (
        
       <Button className="change" variant="outlined" color="primary" size="medium">
           <Update />
        Change
      </Button>
       
    );
}