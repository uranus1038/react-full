import React from "react";

//Components 
import LoginForm from "../Components/LoginForm";
import Navbar from "../Components/Navbar";
const LoginUser = () => {
    return (
        <div>
            <Navbar/>
            <LoginForm />
        </div>
    );
}
export default LoginUser;