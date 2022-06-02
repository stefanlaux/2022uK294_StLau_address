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
      localStorage.setItem("token", response.data.token);
    })
    .catch((error) => {
      console.log("rejected");
      alert(error.response.request.responseText);
    });
};
export default handleSubmit;
