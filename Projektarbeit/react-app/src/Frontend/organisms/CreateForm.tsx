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
  const [ isSubmitting, setSubmitting ] = useState<boolean>(false);
  useEffect(() => {
    if (id) {
      AddressService.getAddressById(id).then((response: any) => {
        setStreetName(response.data.street_name);
        setStreetNumber(response.data.street_number);
        setCity(response.data.city);
        setImportdate(response.data.importdate);
      });
    }
  }, []);

  return (
    <div>
      <Formik

      enableReinitialize={true}

        initialValues={{
          street: streetName,
          city: city,
          number: streetNumber,
          importdate: importdate,
        }}
        onSubmit={(values) => {
          setSubmitting(true);
            if (!id) {
              AddressService.createAddress(
                values.street,
                values.number,
                values.city,
                values.importdate
              ).then(() => {
                navigate("/home");
                setSubmitting(false);
              })
              .catch(() => {
                setSubmitting(false);
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
                setSubmitting(false);
              })
              .catch(() => {
                setSubmitting(false);
              });
            }
            
        }}
      >
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
              type="datetime"
              name="importdate"
              required
            />
            <br />
            <button className="btn" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
      </Formik>
    </div>
  );
}
