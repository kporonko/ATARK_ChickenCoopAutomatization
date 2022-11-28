import React from 'react';
import {getTime, getDate} from "../functions/functions";

const EggCollect = (props: {date: string, count: number}) => {
    // console.log('second props.date')
    // console.log(props.date)
    //
    // console.log('second props.date')
    // console.log(props.count)
    return (
        <div className='feeding'>
            <div className='egg-collect-count-and-icon-wrapper'>
                <img className='feeding-icon' src={require('../assets/egg-icon.png')} alt=""/>
                <h2 className='egg-collect-count'>{props.count}</h2>
            </div>

            <div>
                <h2 className='feeding-date'>
                    {getDate(props.date)}
                </h2>

                <h2 className='feeding-time'>
                    {getTime(props.date)}
                </h2>
            </div>
        </div>
    );
};

export default EggCollect;