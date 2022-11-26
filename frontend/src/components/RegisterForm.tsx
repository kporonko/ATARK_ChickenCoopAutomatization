import React, {useState} from 'react';
import {Link} from "react-router-dom";

const LoginForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [firstFeedingTime, setFirstFeedingTime] = useState('init');
    const [secondFeedingTime, setSecondFeedingTime] = useState('init');
    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <div style={{width: "-webkit-fill-available", margin: "20px 40px"}}>
            <form onSubmit={(e)=> submit(e)}>
                <h1 className='login-form-h1'>Create New Account</h1>
                <div className='register-form-flex-inputs'>
                    <div className='login-form-inputwrapper'>
                        <label className='login-form-label' htmlFor="FirstName">First Name</label>
                        <input className='login-form-input' type="text" placeholder="Enter First Name..." id="FirstName" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                    </div>
                    <div className='login-form-inputwrapper'>
                        <label className='login-form-label' htmlFor="LastName">Last Name</label>
                        <input className='login-form-input' type="text" placeholder="Enter Last Name..." id="LastName" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                    </div>
                </div>
                <div className='login-form-inputwrapper'>
                    <label className='login-form-label' htmlFor="Login">Login</label>
                    <input className='login-form-input' type="email" placeholder="Enter login..." id="Login" value={login} onChange={(e)=>{setLogin(e.target.value)}}/>
                </div>
                <div className='login-form-inputwrapper'>
                    <label className='login-form-label' htmlFor="Password">Password</label>
                    <input className='login-form-input' type="password" placeholder="Enter password..." id="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div className='login-form-inputwrapper'>
                    <label className='login-form-label' htmlFor="FirstFeedingTime">FirstFeedingTime</label>
                    <input required className='login-form-input' type="time" placeholder="Choose time of first feeding..." id="FirstFeedingTime" value={firstFeedingTime} onChange={(e)=>{setFirstFeedingTime(e.target.value)}}/>
                </div>
                <div className='login-form-inputwrapper'>
                    <label className='login-form-label' htmlFor="SecondFeedingTime">SecondFeedingTime</label>
                    <input required className='login-form-input' type="time" placeholder="Choose time of second feeding..." id="SecondFeedingTime" value={secondFeedingTime} onChange={(e)=>{setSecondFeedingTime(e.target.value)}}/>
                </div>
                <button className='login-form-smallBtn'>
                    <Link className='login-form-textDecNone' to={"/"}>I already have an account</Link>
                </button>
                <button type="submit" disabled={login === "" || password === "" || firstName === "" || lastName === "" || password.length < 8 || firstFeedingTime === 'init' || secondFeedingTime === 'init'  && true} className={login === "" || password === "" || firstName === '' || lastName === '' || password.length < 8 || firstFeedingTime === 'init' || secondFeedingTime === 'init' ? 'login-btn-disabled' : 'login-btn-active'}>
                    <h2 className='login-form-button-text'>Create Account</h2>
                </button>
            </form>
        </div>
    );
};

export default LoginForm;