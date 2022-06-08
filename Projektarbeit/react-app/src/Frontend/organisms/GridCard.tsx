import { ThemeProvider } from "@emotion/react";
import { createTheme, Grid, Pagination, Stack } from "@mui/material";
import React, { useEffect } from "react";
import Card from "../molecules/Card";
import "../css/App.css";
import { AddressService } from "../../Service/AddressService";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function GridCard() {
  const [list, setList] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(125);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    AddressService.getEightAddresses(page).then((response: any) => {
      setList(response.data);
      
    });
  }, [page]);

  return (
    <div>
      <Grid
        container
        spacing={5}
        className={"gridContainer"}
        justifyContent="center"
      >
        <br />
        <br />
        {list.map(
          (address: {
            id: string;
            street_name: string;
            street_number: string;
            impotdate: string;
            city: string;
          }) => (
            <Grid key={address.id} item xs={12} sm={6} md={4} lg={3}>
              <Card
                id={address.id}
                streetName={address.street_name}
                streetNummer={address.street_number}
                importDate={address.impotdate}
                city={address.city}
              />
            </Grid>
          )
        )}
      </Grid>
      <ThemeProvider theme={darkTheme}>
        <Stack spacing={2}>
          <Pagination
            className="paginate"
            count={totalPages}
            page={page}
            onChange={handleChange}
            variant="outlined"
            color="primary"
            size="large"
          />
        </Stack>
      </ThemeProvider>
    </div>
  );
}
