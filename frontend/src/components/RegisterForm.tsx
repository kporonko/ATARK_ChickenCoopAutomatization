import React, {useState} from 'react';
import LocalizedStrings from 'react-localization';
import {Link, useNavigate} from "react-router-dom";
import {register} from "../fetch/fetchData";
import {IRegisterUser} from "../interfaces/IRegisterUser";

const LoginForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [firstFeedingTime, setFirstFeedingTime] = useState('init');
    const [secondFeedingTime, setSecondFeedingTime] = useState('init');

    const nav = useNavigate()

    let strings = new LocalizedStrings({
        en:{
            create:"Create New Account",
            firstName: "First Name",
            enterFirstName: "Enter First Name...",
            lastName: "Last Name",
            enterLastName: "Enter Last Name...",
            login:"Login",
            enterLogin: "Enter login...",
            password:"Password",
            firstFeeding:"First Feeding Time",
            secondFeeding:"Second Feeding Time",
            enterPassword: "Enter password...",
            alrHaveAcc: "I already have the account",
            enter: "Create"
        },
        ru: {
            login:"Логин",
            enterLogin: "Введите логин...",
            password:"Пароль",
            enterPassword: "Введите пароль...",
            dontHaveAcc: "У меня нет аккаунта",
            create:"Создать аккаунт",
            firstName: "Имя",
            enterFirstName: "Введите имя...",
            lastName: "Фамилия",
            enterLastName: "Введите фамилию...",
            firstFeeding:"Время первой кормежки",
            secondFeeding:"Время второй кормежки",
            alrHaveAcc: "У меня уже есть аккаунт",
            enter: "Создать"
        }
    });


    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isCreated = await register({login: login, password: password, firstName: firstName, lastName: lastName, timeOfFirstFeeding: firstFeedingTime, timeOfSecondFeeding: secondFeedingTime} as IRegisterUser)
        if(isCreated === 201){
            alert("Account created")
            nav('/')
        }
        else if(isCreated === 409){
            alert("This email is already taken")
        }
        else{
            alert("Oops... Something went wrong")
        }
    }

    return (
        <div style={{width: "-webkit-fill-available", margin: "20px 40px"}}>
            <form onSubmit={(e)=> submit(e)}>
                <h1 className='login-form-h1'>{strings.create}</h1>
                <div className='register-form-flex-inputs'>
                    <div className='login-form-inputwrapper'>
                        <label className='login-form-label' htmlFor="FirstName">{strings.firstName}</label>
                        <input className='login-form-input' type="text" placeholder={strings.enterFirstName} id="FirstName" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                    </div>
                    <div className='login-form-inputwrapper'>
                        <label className='login-form-label' htmlFor="LastName">{strings.lastName}</label>
                        <input className='login-form-input' type="text" placeholder={strings.enterLastName} id="LastName" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                    </div>
                </div>
                <div className='login-form-inputwrapper'>
                    <label className='login-form-label' htmlFor="Login">{strings.login}</label>
                    <input className='login-form-input' type="email" placeholder={strings.enterLogin} id="Login" value={login} onChange={(e)=>{setLogin(e.target.value)}}/>
                </div>
                <div className='login-form-inputwrapper'>
                    <label className='login-form-label' htmlFor="Password">{strings.password}</label>
                    <input className='login-form-input' type="password" placeholder={strings.enterPassword} id="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div className='login-form-inputwrapper'>
                    <label className='login-form-label' htmlFor="FirstFeedingTime">{strings.firstFeeding}</label>
                    <input required className='login-form-input' type="time" placeholder="Choose time of first feeding..." id="FirstFeedingTime" value={firstFeedingTime} onChange={(e)=>{setFirstFeedingTime(e.target.value)}}/>
                </div>
                <div className='login-form-inputwrapper'>
                    <label className='login-form-label' htmlFor="SecondFeedingTime">{strings.secondFeeding}</label>
                    <input required className='login-form-input' type="time" placeholder="Choose time of second feeding..." id="SecondFeedingTime" value={secondFeedingTime} onChange={(e)=>{setSecondFeedingTime(e.target.value)}}/>
                </div>
                <button className='login-form-smallBtn'>
                    <Link className='login-form-textDecNone' to={"/"}>{strings.alrHaveAcc}</Link>
                </button>
                <button type="submit" disabled={login === "" || password === "" || firstName === "" || lastName === "" || password.length < 8 || firstFeedingTime === 'init' || secondFeedingTime === 'init'  && true} className={login === "" || password === "" || firstName === '' || lastName === '' || password.length < 8 || firstFeedingTime === 'init' || secondFeedingTime === 'init' ? 'login-btn-disabled' : 'login-btn-active'}>
                    <h2 className='login-form-button-text'>{strings.enter}</h2>
                </button>
            </form>
        </div>
    );
};

export default LoginForm;