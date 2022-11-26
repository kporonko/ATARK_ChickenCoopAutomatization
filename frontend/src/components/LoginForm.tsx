import React, {useState} from 'react';
import {Link} from "react-router-dom";

const LoginForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <div style={{width: "-webkit-fill-available", margin: "150px 40px"}}>
            <form onSubmit={(e)=> submit(e)}>
                <h1 className="login-form-h1">Sign In To Your Account</h1>
                <div className="login-form-inputwrapper">
                    <label className='login-form-label' htmlFor="Login">Login</label>
                    <input required className='login-form-input' type="email" placeholder="Enter login..." id="Login" value={login} onChange={(e)=>{setLogin(e.target.value)}}/>
                </div>
                <div className="login-form-inputwrapper">
                    <label className='login-form-label' htmlFor="Password">Password</label>
                    <input required className='login-form-input' type="password" placeholder="Enter password..." id="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <button className="login-form-smallBtn">
                    <Link className="login-form-textDecNone" to={"/register"}>I don`t have an account</Link>
                </button>
                <button type="submit" disabled={login === "" || password === "" || password.length < 8 && true} className={login === "" || password === "" || password.length < 8 ? 'login-btn-disabled' : 'login-btn-active'}>
                    <h2 className='login-form-button-text'>Login</h2>
                </button>
            </form>
        </div>
    );
};

export default LoginForm;