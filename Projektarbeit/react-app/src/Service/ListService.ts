import API from "./API";

const getAddress = ():any => {

return API.get("/address" , {
    headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
        }
        }).then((response) => {
    return response.data;
    }).catch((error) => {
    console.log(error);
    });
  ; 

};
export default getAddress;
