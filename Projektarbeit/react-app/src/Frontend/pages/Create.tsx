import React from "react";
import JWTButton from "../molecules/JWTButton";
import CloseButton from "../molecules/CloseButton";
import TitleLine from "../molecules/TitleLine";
import CreateForm from "../organisms/CreateForm";

export default function create() {
  return (
    <div>
      <JWTButton />
      <TitleLine title={"Create"} />
      <CloseButton />

      <CreateForm />
    </div>
  );
}
