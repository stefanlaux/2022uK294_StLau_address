import API from "./AxiosInstances";

const getAllAddress = (page : number):any => {
return API.get(`/address?_page=${page}&_limit=8`);
};

const getAddressById = (id : string):any => {
  return API.get(`/address/${id}`);
  };

export const AddressService = {
  getAllAddress,
  getAddressById,
}
