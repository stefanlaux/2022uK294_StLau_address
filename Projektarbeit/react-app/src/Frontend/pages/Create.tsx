import React from "react";
import JWTButton from "../molecules/JWTButton";
import RedButton from "../molecules/RedButton";
import TitleLine from "../molecules/TitleLine";

export default function 
create() {
    return( 
    <div>

        <TitleLine title={"Create"}/>
        <JWTButton />
        <RedButton useOnClick={false}/>
    </div>
    );
    }
