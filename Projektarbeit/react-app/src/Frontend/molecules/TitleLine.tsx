import React from "react";
import "../css/App.css";

interface props {
  title: string
}


export default function titleLine({ title }: props) {
  return (
    <div>
      <h1 className="headerTitle">{title}</h1>
      <hr className="headerLine" />
    </div>
  );
}
