import API from "./AxiosInstances";

const getAllAddress = ():any => {
return API.get("/address");
};

export const AddressService = {
  getAllAddress,
}
