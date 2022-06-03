import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

interface props {
    id: string;
    streetName: string;
    streetNummer: string;
    importDate: string;
    city: string;
  }

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
  >
    •
  </Box>
);

export default function card({ id, streetName, streetNummer, importDate, city }: props) {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {id}
        </Typography>
        <Typography variant="h5" component="div">
          {streetName} {streetNummer}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {city}
        </Typography>
        <Typography variant="body2">
          {importDate}
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Details</Button>
      </CardActions>
    </Card>
  );
}
