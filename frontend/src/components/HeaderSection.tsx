import React from 'react';
import LocalizedStrings from 'react-localization';
import {inspect} from "util";

const HeaderSection = (props: {text: string, additionalText?: string}) => {

    let strings = new LocalizedStrings({
        en:{
            myCoops:"My Coops",
            add: "Add New Coop",
            coop: 'Coop ',
            info: "Information"
        },
        ru: {
            myCoops:"Мои Курятники",
            add: "Добавить новый курятник",
            coop: 'Курятник ',
            info: 'Информация'
        }
    });

    const localize = (text: string) => {
        if (text === 'My Coops')
            return strings.myCoops;
        if (text === 'Add New Coop')
            return strings.add;
        if (text === 'Coop ')
            return strings.coop;
        if (text === 'Information ')
            return strings.info;
    }

    return (
        <div className='header-section-wrapper'>
            <h2 className='header-section-text'>
                {localize(props.text)}
                <em style={{color: 'yellow'}}>{props.additionalText}</em>
            </h2>
        </div>
    );
};

export default HeaderSection;