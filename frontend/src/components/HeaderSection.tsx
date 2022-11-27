import React from 'react';
import LocalizedStrings from 'react-localization';
import {inspect} from "util";

const HeaderSection = (props: {text: string}) => {

    let strings = new LocalizedStrings({
        en:{
            myCoops:"My Coops",
            add: "Add New Coop"
        },
        ru: {
            myCoops:"Мои Курятники",
            add: "Добавить новый курятник"
        }
    });

    const localize = (text: string) => {
        if (text === 'My Coops')
            return strings.myCoops;
        if (text === 'Add New Coop')
            return strings.add;
    }

    return (
        <div className='header-section-wrapper'>
            <h2 className='header-section-text'>
                {localize(props.text)}
            </h2>
        </div>
    );
};

export default HeaderSection;