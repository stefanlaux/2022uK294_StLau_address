import axios from "axios";
import React, { useState } from "react";
import loginService from "../../Service/LoginService";
import "../css/Login.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => loginService(e, email, password)}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          name="email"
          required
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        <br />
        <button className="btn" type="submit">
          Login
        </button>
      </form>
      <div className="divLink">
        <a className="link" href="/register">
          Neues Konto erstellen
        </a>
      </div>
    </div>
  );
}

export default LoginForm;
