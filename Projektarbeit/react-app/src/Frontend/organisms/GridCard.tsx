import { ClassNames } from "@emotion/react";
import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Card from "../molecules/Card";
import "../css/App.css";
import { AddressService } from "../../Service/AddressService";

export default function gridCard() {
  const [list, setList] = React.useState([]);

  useEffect(() => {
    AddressService.getAllAddress()
      .then((response: any) => {
        setList(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
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
            <Grid item xs={12} sm={6} md={4} lg={3}>
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
    </div>
  );
}
