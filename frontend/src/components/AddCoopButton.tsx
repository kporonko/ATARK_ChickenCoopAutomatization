import React from 'react';
import LocalizedStrings from "react-localization";

const AddCoopButton = () => {

    let strings = new LocalizedStrings({
        en:{
            add:"Add Coop",
        },
        ru: {
            add:"Добавить Курятник",
        }
    });

    return (
        <div className='button-add-coop-wrapper'>
            <button className='button-add-coop'>
                <img className='button-add-icon' src={require('../assets/plus_icon.png')} alt=""/>
                <h2>{strings.add}</h2>
            </button>
        </div>

    );
};

export default AddCoopButton;