import axios from "axios";
import { Formik, Field, Form, FormikHelpers } from "formik";
import React, { useState } from "react";
import loginService from "../../Service/LoginService";
import "../css/Login.css";

function LoginForm() {
  interface Values {
    email: string;
    password: string;
  }

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
            loginService(values.email, values.password);
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
