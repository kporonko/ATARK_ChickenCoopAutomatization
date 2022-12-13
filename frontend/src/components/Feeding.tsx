import React from 'react';
import {getTime, getDate} from "../functions/functions";

const Feeding = (props: {feeding: string}) => {
    return (
        <div className='feeding'>
            <div>
                <img className='feeding-icon' src={require('../assets/meal-food-icon.png')} alt=""/>
            </div>

            <div>
                <h2 className='feeding-date'>
                    {getDate(props.feeding)}
                </h2>

                <h2 className='feeding-time'>
                    {getTime(props.feeding)}
                </h2>
            </div>
        </div>
    );
};

export default Feeding;