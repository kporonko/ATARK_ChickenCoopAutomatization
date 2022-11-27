import React from 'react';

const HeaderSection = (props: {text: string}) => {
    return (
        <div className='header-section-wrapper'>
            <h2 className='header-section-text'>
                {props.text}
            </h2>
        </div>
    );
};

export default HeaderSection;