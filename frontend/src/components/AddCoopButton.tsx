import React from 'react';
import LocalizedStrings from "react-localization";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;
import {addCoop} from "../fetch/fetchData";
import {ICoopAdd} from "../interfaces/ICoopAdd";

const AddCoopButton = (props: {isSubmit: boolean, setIsActive: React.Dispatch<React.SetStateAction<boolean>>, name?: string, id?: number}) => {

    let strings = new LocalizedStrings({
        en:{
            add:"Add Coop",
        },
        ru: {
            add:"Добавить Курятник",
        }
    });


    const handleSubmit = async () => {
        const idUser = localStorage.getItem("id");
        if (idUser !== null && props.name !== undefined && props.id !== undefined && props.name.length > 0){
            const statusResponse = await addCoop({ coopName: props.name, ipThermometer: props.id.toString(), profileId: +idUser} as ICoopAdd)
            if (statusResponse === 201){
                alert("Ok")
                window.location.reload()
            }
            else{
                alert("Oops... Something went wrong")
            }
        }
    }

    const chooseMethod = async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (props.isSubmit === true) {
            e.preventDefault();
            await handleSubmit()
        }
        else{
            props.setIsActive(true)
        }
    }

    return (
        <div className='button-add-coop-wrapper'>
            <button
                type={props.isSubmit ? 'submit' : 'button'}
                className='button-add-coop'
                onClick={(e) => chooseMethod(e)}
            >
                <img className='button-add-icon' src={require('../assets/plus_icon.png')} alt=""/>
                <h2>{strings.add}</h2>
            </button>
        </div>

    );
};

export default AddCoopButton;