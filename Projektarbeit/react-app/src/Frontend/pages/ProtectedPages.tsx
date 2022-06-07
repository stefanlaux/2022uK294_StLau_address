import React from "react";
import { Navigate, Routes } from "react-router-dom";
import { isAuthorized } from "../../Service/UserService";

export default function ProtectedPages({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  if (isAuthorized()) {
    return <Routes> {children} </Routes>;
  } else {
    return <Navigate to={"/login"} />;
  }
}
