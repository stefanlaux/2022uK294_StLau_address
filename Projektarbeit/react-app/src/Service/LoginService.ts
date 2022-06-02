import axios from "axios";
import { setDefaultResultOrder } from "dns";
import { useState } from "react";


const handleSubmit =  (event: React.FormEvent<HTMLFormElement>, email:string, password:string) => {
   
    event.preventDefault();
   
    axios({
      method: "POST",
      url: "http://localhost:3030/login",
      data: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        
        // return accessToken to Dashboard.tsx so it can be used to make rewquest to the server
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.request.responseText);
      });
      
  };
  export default handleSubmit;