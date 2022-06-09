import { ThemeProvider } from "@emotion/react";
import { Close, HorizontalRule } from "@mui/icons-material";
import { Alert, createTheme, IconButton, Snackbar } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";

interface props {
  message: string;
  set: boolean;
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function SnackBar({ message, set }: props): any {
  const handleClose = () => {
    set = false;
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={set}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert severity="error" color="error">
          {message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
