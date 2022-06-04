import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function PaginationController() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Stack spacing={2}>
        <Pagination
          className="paginate"
          count={125}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="primary"
          size="large"
        />
      </Stack>
    </ThemeProvider>
  );
}
