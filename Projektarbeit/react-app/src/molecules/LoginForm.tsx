import React, { useState } from "react";
import '../css/Login.css'

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accessToken, setToken] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        try {
            const response = await fetch("http://localhost:3030/login", {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: "application/json"
                }
            });
            const token = await response.json();
            setToken(token.accessToken);

            if (response.status === 400) {
                alert("Invalid credentials or user does not exist");
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" name="email" required />
                <br />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" name="password" required />
                <br />
                <button className="btn" type="submit">Sign in</button>
            </form>
            <div className="divLink">
                <a className="link" href="/register">Neues Konto erstellen</a>
            </div>
        </div>
    );

}

export default LoginForm;