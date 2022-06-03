import { Grid, Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Card from "../molecules/Card";
import JWTButton from "../molecules/JWTButton";
import TitleLine from "../molecules/TitleLine";
import GridCard from "../organisms/GridCard";



export default function details() {
    return (
    <div>

        <TitleLine title={"Details"}/>
        <JWTButton />
    
        
    </div>
    );
    }
