import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import React from "react";
import "../css/App.css";
import { AddressService } from "../../Service/AddressService";
import SnackBar from "../organisms/SnackBar";
import { useNavigate } from "react-router-dom";

export default function DeleteButton({ id }: { id: string }) {
  const navigate = useNavigate();
  return (
    <Button
      className="delete"
      variant="outlined"
      color="error"
      size="medium"
      onClick={() => {
        AddressService.deleteAddress(id)
          .then((response: any) => {
            navigate("/home");
          })
          .catch((error: any) => {
            <SnackBar
              message={error.response.data.message}
              set={true}
            />;
          });
      }}
    >
      <Delete />
      Delete
    </Button>
  );
}
