import React, { useEffect } from "react";
import { AddressService } from "../../Service/AddressService";

export default function AddressDetails({ id }: { id: string }) {
  const [address, setAddress] = React.useState({
    id: "",
    street_name: "",
    street_number: "",
    importdate: "",
    city: "",
  });

  useEffect(() => {
    AddressService.getAddressById(id)
      .then((response: any) => {
        setAddress(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <div className="normalDetails">
        
          <p>City:</p>
          <h3>
            {address.city}
          </h3>
          <br />
          <p>Street Name:</p>
          <h3>
            {address.street_name}
          </h3>
          <br />
          <p>Street Number:</p>
          <h3>
            {address.street_number}
          </h3>
          <br />
          <p>Importdate:</p>
          <h3>
            {address.importdate}
          </h3>
          
      </div>
      <div className="idDisplay">
        <h1>ID: {address.id}</h1>
      </div>
    </div>
  );
}
