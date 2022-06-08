import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../css/App.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface props {
  id: string;
  streetName: string;
  streetNummer: string;
  importDate: string;
  city: string;
}

export default function card({
  id,
  streetName,
  streetNummer,
  importDate,
  city,
}: props) {
  const handleClick = () => {
    window.location.href = `/details/${id}`;
  };

  let title = `${streetName} ${streetNummer}`;

  return (
    <ThemeProvider theme={darkTheme}>
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {id}
          </Typography>
          <Typography variant="h5" component="div" className="whitespace" >
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {city}
          </Typography>
          <Typography variant="body2">{importDate}</Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" className="detailsButton" onClick={handleClick}>
            Details
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
