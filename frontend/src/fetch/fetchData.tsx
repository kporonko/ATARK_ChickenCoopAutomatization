import {ILoginUser} from "../interfaces/ILoginUser";
import {IRegisterUser} from "../interfaces/IRegisterUser";

export const BASE_URL = 'https://localhost:7290/';

export const login = async (user: ILoginUser) => {
    const response = await fetch(`${BASE_URL}Profile/login?login=${user.login}&password=${user.password}`, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }});

    const body = await response.json();
    if (response.status === 200) {
        localStorage.setItem("id", body.profileId)
        return true;
    }
    return false;
}

export const register = async (user: IRegisterUser) => {
    const response = await fetch(`${BASE_URL}Profile/register`, {
        method: 'POST',
        body: JSON.stringify({
            "login": user.login,
            "password": user.password,
            "lastName": user.lastName,
            "firstName": user.firstName,
            "timeOfFirstFeeding": user.timeOfFirstFeeding,
            "timeOfSecondFeeding": user.timeOfSecondFeeding
        }),
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true"
        }});

    return response.status;
}
