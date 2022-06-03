import axios, { AxiosResponse } from "axios";
import API from "./AxiosInstances";


const handleSubmit = (email: string, password: string): Promise<AxiosResponse> => {
  return API.post("/login", {
    email,
    password,
  });
};


 

export default handleSubmit;
