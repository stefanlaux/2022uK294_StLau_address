import API from "./AxiosInstances";

const getAllAddress = (page : number):any => {
return API.get(`/address?_page=${page}&_limit=8`);
};

export const AddressService = {
  getAllAddress,
}
