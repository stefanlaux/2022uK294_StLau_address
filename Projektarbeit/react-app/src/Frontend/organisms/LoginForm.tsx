import axios from "axios";
import { Formik, Field, Form, FormikHelpers } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginService from "../../Service/UserService";
import "../css/Login.css";

function LoginForm() {
  interface Values {
    email: string;
    password: string;
  }
  const navigate = useNavigate();

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            loginService(values.email, values.password).then((response: any) => {
              localStorage.setItem("token", response.data['accessToken']);
              navigate("/home");
            })
            .catch((error: any) => {
              console.log("rejected");
              alert(error.response.request.responseText);
            });
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field placeholder="Email" type="email" name="email" required />
            <br />
            <Field
              placeholder="Password"
              type="password"
              name="password"
              required
            />
            <br />
            <button className="btn" type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
      <div className="divLink">
        <a className="link" href="/register">
          Neues Konto erstellen
        </a>
      </div>
    </div>
  );
}

export default LoginForm;

