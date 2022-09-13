import React from "react";
import {  Navigate, useNavigate } from "react-router-dom";
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';


const Navbar = () => {
    const navigation = useNavigate();
    const cookie_key = 'namedOFCookie';
    const logout=()=>
    {
        delete_cookie(cookie_key);
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Uranus</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-around" id="navbarNav">
                        <ul class="navbar-nav me-auto ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                {(read_cookie(cookie_key)!="") ? <a href="/" onClick={()=>{
                                    logout(); 
                                }} class="nav-link active" aria-current="page" style={{cursor:'pointer'}} >Logout</a> : <a onClick={()=>{
                                    navigation("/login");
                                }} class="nav-link active" aria-current="page" style={{cursor:'pointer'}} target="_blank">Login</a>}
                            </li>   
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar; 