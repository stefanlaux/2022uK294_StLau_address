import { Button } from "@mui/material";
import { Update } from "@mui/icons-material";
import React from "react";
import "../css/App.css";
import { useNavigate } from "react-router-dom";

export default function ChangeButton({ id }: { id: string }) {
  const navigate = useNavigate();
  return (
    <Button
      className="change"
      variant="outlined"
      color="primary"
      size="medium"
      onClick={() => {
        navigate(`/update/${id}`);
      }}
    >
      <Update />
      Change
    </Button>
  );
}
