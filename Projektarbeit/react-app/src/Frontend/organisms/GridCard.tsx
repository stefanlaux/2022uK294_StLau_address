import { ClassNames } from "@emotion/react";
import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Card from "../molecules/Card";
import "../css/App.css";
import ListService from "../../Service/ListService";

export default function gridCard() {
    const [list, setList] = React.useState([]);
    
    useEffect(() => 
        {
            ListService().then((res: any) => setList(res));
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
       {list.map((address: { id: string; street_name: string; street_number: string; impotdate: string; city:string;}) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card id={address.id} streetName={address.street_name} streetNummer={address.street_number} importDate={address.impotdate} city={address.city} />
                </Grid>
        ))} 
        
      </Grid>
    </div>
  );
}
