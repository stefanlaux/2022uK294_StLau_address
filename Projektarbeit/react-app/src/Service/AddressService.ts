import API from "./AxiosInstances";

const getEightAddresses = (page : number):any => {
return API.get(`/address?_page=${page}&_limit=8`);
};

const getAddressById = (id : string):any => {
  return API.get(`/address/${id}`);
  };

  const deleteAddress = (id : string):any => {
    return API.delete(`/address/${id}`);
    };

  const createAddress = (streetname: string, streetnumber: string, city: string, importdate: string): any => {
    return API.post(`/address`, {
      "street_name": streetname,
      "street_number": streetnumber,
      "city": city,
      "importdate": importdate,
    });
  }

  const updateAddress = (id:string, streetname: string, streetnumber: string, city: string, importdate: string): any => {
    return API.put(`/address/${id}`, {
      "street_name": streetname,
      "street_number": streetnumber,
      "city": city,
      "importdate": importdate,
    });
  }


export const AddressService = {
  getEightAddresses,
  getAddressById,
  deleteAddress,
  createAddress,
  updateAddress
}
