import React, { useEffect } from 'react';
import { AddressService } from '../../Service/AddressService';

export default function AddressDetails() {


    
    
    let path = window.location.pathname.replace("/details/", "");

    const [address, setAddress] = React.useState({ id: "", street_name: "", street_number: "", importdate: "", city: "" });

    useEffect(() => {
        AddressService.getAddressById(path)
            .then((response: any) => {
                setAddress(response.data);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }, [path]);

    return (
       <div>
            <div className='normalDetails'>
        
            <h4>
                City:          {address.city}
                <br />
                <br />
                Street Name:    {address.street_name}
                <br />
                <br />
                Street Number:  {address.street_number}
                <br />
                <br />
                Importdate:  {address.importdate}
                <br />
            </h4>

        </div>
        <div className='idDisplay'>

            <h1>
                ID: {address.id}
            </h1>

        </div>
       </div>
    );
    }