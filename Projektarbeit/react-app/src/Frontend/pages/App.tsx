import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Details from "./Details";
import Home from "./Home";
import Login from "./Login";


export default function app() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
        </BrowserRouter>
        </div >
    );
}


