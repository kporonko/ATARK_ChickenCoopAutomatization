import React, {useState} from 'react';
import LoginImage from "../components/LoginImage";
import AbsoluteLoginText from "../components/AbsoluteLoginText";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    return (
        <div className="login-main-div">
            <LoginImage/>
            <AbsoluteLoginText/>
            <LoginForm/>
        </div>
    );
};

export default LoginPage;