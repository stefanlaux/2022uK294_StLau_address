import { Formik, Field, Form } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddressService } from "../../Service/AddressService";
import "../css/Login.css";
import * as Yup from "yup";

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

  const validateSchema = Yup.object().shape({
    importdate: Yup.string().required("Importdate is required").matches(/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)/, "Invalid date format"),
    street: Yup.string().required("Street name is required").max(50, "Street name must be less than 50 characters"),
    number: Yup.string().required("Street number is required"),
    city: Yup.string().required("City is required").max(30, "City must be less than 30 characters")
  });

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
        validationSchema={validateSchema}
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
        {({ errors, touched }) => (
          <Form>
            <Field
              placeholder="Street Name"
              type="street"
              name="street"
            />
             {touched.street && errors.street && <div>{errors.street}</div>}
            <br />
            <Field
              placeholder="Street Number"
              type="number"
              name="number"
            />
             {touched.number && errors.number && <div>{errors.number}</div>}
            <br />
            <Field 
            placeholder="City" 
            type="city" 
            name="city" 
             />
             {touched.city && errors.city && <div>{errors.city}</div>}
            <br />
            <Field
              placeholder="Importdate"
              type="datetime"
              name="importdate"
            />
             {touched.importdate && errors.importdate && <div>{errors.importdate}</div>}
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
