import { Formik, Field, Form } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddressService } from "../../Service/AddressService";
import "../css/Login.css";

export default function CreateForm() {
  const navigate = useNavigate();
  const { id }: any = useParams();

  const [streetName, setStreetName] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [city, setCity] = useState("");
  const [importdate, setImportdate] = useState("");

  useEffect(() => {
    if (id) {
      AddressService.getAddressById(id).then((response: any) => {
        setStreetName(response.data.street_name);
        setStreetNumber(response.data.street_number);
        setCity(response.data.city);
        setImportdate(response.data.importdate);
        console.log(response.data.importdate);
      });
    }
  }, []);

  return (
    <div>
      <Formik
        initialValues={{
          street: streetName,
          city: city,
          number: streetNumber,
          importdate: importdate,
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            if (!id) {
              AddressService.createAddress(
                values.street,
                values.number,
                values.city,
                values.importdate
              ).then(() => {
                navigate("/home");
              });
            } else {
              AddressService.updateAddress(
                id,
                values.street,
                values.number,
                values.city,
                values.importdate
              ).then(() => {
                navigate("/home");
              });
            }
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              placeholder="Street Name"
              type="street"
              name="street"
              required
            />
            <br />
            <Field
              placeholder="Street Number"
              type="number"
              name="number"
              required
            />
            <br />
            <Field placeholder="City" type="city" name="city" required />
            <br />
            <Field
              placeholder="Importdate"
              type="date"
              name="importdate"
              required
            />
            <br />
            <button className="btn" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
