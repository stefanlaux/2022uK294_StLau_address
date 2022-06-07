import { Grid, Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import Card from "../molecules/Card";
import ChangeButton from "../molecules/ChangeButton";
import CloseButton from "../molecules/CloseButton";
import DeleteButton from "../molecules/DeleteButton";
import JWTButton from "../molecules/JWTButton";
import TitleLine from "../molecules/TitleLine";
import AddressDetails from "../organisms/AddressDetails";

export default function Details() {
  const { id } = useParams();
  if (!id) {
    return <div>No id</div>;
  }
  return (
    <div>
      <JWTButton />
      <TitleLine title={"Details"} />
      <CloseButton />
      <AddressDetails id={id} />
      <DeleteButton id={id} />
      <ChangeButton id={id} />
    </div>
  );
}
