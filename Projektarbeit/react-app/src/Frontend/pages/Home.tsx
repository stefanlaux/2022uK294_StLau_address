import { Pagination } from "@mui/material";
import React from "react";
import GridCard from "../organisms/GridCard";
import HomeHeader from "../organisms/HomeHeader";
import PaginationController from "../organisms/PaginationController";

function home() {
  return (
    <div>
     <HomeHeader />
     <GridCard />
    </div>
  );
}

export default home;
