import axios from "axios";

const handleSubmit = (email: string, password: string) => {
  axios({
    method: "POST",
    url: "http://localhost:3030/login",
    data: {
      email: email,
      password: password,
    },
  })
    .then((response) => {
      console.log("resolved");
      // return accessToken to Dashboard.tsx so it can be used to make rewquest to the server
    })
    .catch((error) => {
      console.log("rejected");
      alert(error.response.request.responseText);
    });
};
export default handleSubmit;
