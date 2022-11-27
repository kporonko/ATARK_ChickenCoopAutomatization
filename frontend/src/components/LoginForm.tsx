import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {login as loginUser} from "../fetch/fetchData";
import {IRegisterUser} from "../interfaces/IRegisterUser";
import {ILoginUser} from "../interfaces/ILoginUser";
import LocalizedStrings from 'react-localization';

const LoginForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const nav = useNavigate()

    let strings = new LocalizedStrings({
        en:{
            signIn:"Sign In To Your Account",
            login:"Login",
            enterLogin: "Enter login...",
            password:"Password",
            enterPassword: "Enter password...",
            dontHaveAcc: "I don't have an account",
            enter: "Login"
        },
        ru: {
            signIn:"Войти в аккаунт",
            login:"Логин",
            enterLogin: "Введите логин...",
            password:"Пароль",
            enterPassword: "Введите пароль...",
            dontHaveAcc: "У меня нет аккаунта",
            enter: "Войти"
        }
    });

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isLogin = await loginUser({login: login, password: password} as ILoginUser)
        if(isLogin){
            nav('/my-coops')
        }
        else{
            alert("Incorrect password or email")
        }
    }
    return (
        <div style={{width: "-webkit-fill-available", margin: "150px 40px"}}>
            <form onSubmit={(e)=> submit(e)}>
                <h1 className="login-form-h1">{strings.signIn}</h1>
                <div className="login-form-inputwrapper">
                    <label className='login-form-label' htmlFor="Login">{strings.login}</label>
                    <input required className='login-form-input' type="email" placeholder={strings.enterLogin} id="Login" value={login} onChange={(e)=>{setLogin(e.target.value)}}/>
                </div>
                <div className="login-form-inputwrapper">
                    <label className='login-form-label' htmlFor="Password">{strings.password}</label>
                    <input required className='login-form-input' type="password" placeholder={strings.enterPassword} id="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <button className="login-form-smallBtn">
                    <Link className="login-form-textDecNone" to={"/register"}>{strings.dontHaveAcc}</Link>
                </button>
                <button type="submit" disabled={login === "" || password === "" || password.length < 8 && true} className={login === "" || password === "" || password.length < 8 ? 'login-btn-disabled' : 'login-btn-active'}>
                    <h2 className='login-form-button-text'>{strings.enter}</h2>
                </button>
            </form>
        </div>
    );
};

export default LoginForm;