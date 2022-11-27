import React from 'react';
import LocalizedStrings from "react-localization";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;

const AddCoopButton = (props: {isSubmit: boolean, setIsActive: React.Dispatch<React.SetStateAction<boolean>>}) => {

    let strings = new LocalizedStrings({
        en:{
            add:"Add Coop",
        },
        ru: {
            add:"Добавить Курятник",
        }
    });

    const chooseMethod = () => {
        if (props.isSubmit === true)
            return;
        else{
            props.setIsActive(true)
        }
    }

    return (
        <div className='button-add-coop-wrapper'>
            <button
                type={props.isSubmit ? 'submit' : 'button'}
                className='button-add-coop'
                onClick={() => chooseMethod()}
            >
                <img className='button-add-icon' src={require('../assets/plus_icon.png')} alt=""/>
                <h2>{strings.add}</h2>
            </button>
        </div>

    );
};

export default AddCoopButton;