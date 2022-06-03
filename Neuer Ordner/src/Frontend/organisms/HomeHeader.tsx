import React from "react";
import JwtButton from "../molecules/JWTButton";
import CreateButton from "../molecules/GreenButton";
import TitleLine from "../molecules/TitleLine";

export default function homeHeader() {
  return (
    <div>
      <JwtButton />
      <TitleLine title={"Home"}/>
      <CreateButton />
    </div>
  );
}
