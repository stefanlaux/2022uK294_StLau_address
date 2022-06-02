import React from "react";
import JwtButton from "../molecules/JWTButton";
import CreateButton from "../molecules/RedButton";
import TitleLine from "../molecules/TitleLine";

export default function HomeHeader() {
  return (
    <div>
      <JwtButton />
      <TitleLine />
      <CreateButton useOnClick={true} />
    </div>
  );
}
