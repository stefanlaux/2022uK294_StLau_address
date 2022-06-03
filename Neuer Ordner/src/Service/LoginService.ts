import axios from "axios";
import { appendFile } from "fs";
import API from "./API";
const handleSubmit = (email: string, password: string): any => {

  API.post("/login", {
    email: email,
    password: password
  }).then((response: any) => {
    localStorage.setItem("token", response.data['accessToken']);
  })
  .catch((error: any) => {
    console.log("rejected");
    alert(error.response.request.responseText);
  });;
};
export default handleSubmit;
