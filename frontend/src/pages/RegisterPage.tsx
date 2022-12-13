import React from 'react';
import LoginImage from "../components/LoginImage";
import AbsoluteLoginText from "../components/AbsoluteLoginText";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
    return (
        <div className="login-main-div">
            <LoginImage/>
            <AbsoluteLoginText/>
            <RegisterForm/>
        </div>
    );
};

export default RegisterPage;