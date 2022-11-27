import React from 'react';
import LocalizedStrings from 'react-localization';

const AbsoluteLoginText = () => {

    let strings = new LocalizedStrings({
        en:{
            text:"Best application for coops tracking and chicken care",
        },
        ru: {
            text:"Лучшее приложение для трекинга статистики курятников и заботы о курях",
        }
    });

    return (
        <div>
            <span className='main-header-login'>Chicken Coop</span>
            <h2 className='text-header-login'>{strings.text}</h2>
        </div>
    );
};

export default AbsoluteLoginText;