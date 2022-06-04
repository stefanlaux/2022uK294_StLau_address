import { Button } from "@mui/material";
import {Delete} from "@mui/icons-material";
import React from "react";

export default function deleteButton() {
    return (
        <div>
       <Button variant="outlined" color="error" size="small">
           <Delete />
        Delete
      </Button>
        </div>
    );
}