import React from 'react';
import LocalizedStrings from "react-localization";

const CoopDesc = (props: {name: string, eggsCount: number}) => {

    let strings = new LocalizedStrings({
        en:{
            eggs:"Eggs count this week",
        },
        ru: {
            eggs:"Снесенных яиц за эту неделю",
        }
    });


    return (
        <div className='coop-wrapper'>
            <div className='coop-icon-wrapper'>
                <img className='coop-icon' src={require('../assets/7415381.png')} alt=""/>
            </div>

            <div className='coop-info'>
                <div>
                    <h3 className='coop-info-name'>{props.name}</h3>
                </div>

                <div>
                    <h5 className='coop-info-eggs'>{strings.eggs}: {props.eggsCount}</h5>
                </div>
            </div>

            <div className='coop-temp-circle'>
                <div className='coop-temp-circle-text'>
                    34,2&deg;C
                </div>
            </div>
        </div>
    );
};

export default CoopDesc;