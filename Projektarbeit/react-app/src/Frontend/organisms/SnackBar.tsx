import { ThemeProvider } from "@emotion/react";
import { Close, HorizontalRule } from "@mui/icons-material";
import { Alert, createTheme, IconButton, Snackbar } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import React, { useEffect } from "react";

interface props {
  message: string;
  set: boolean;
  good: boolean;
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function SnackBar({ message, set, good }: props): any {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    set = false;
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={set}
        autoHideDuration={2000}
        message={message}
        onClose={handleClose}
        color="error"
      >
        <Alert severity="error" color="error">
          {message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
