import { Button } from "@mui/material";
import {Delete} from "@mui/icons-material";
import React from "react";
import '../css/App.css';
import { AddressService } from "../../Service/AddressService";

export default function deleteButton() {


    return (
       <Button className="delete" variant="outlined" color="error" size="medium">
           <Delete />
        Delete
      </Button>       
    );
}