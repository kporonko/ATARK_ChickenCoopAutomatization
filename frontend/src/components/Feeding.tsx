import React from 'react';

const Feeding = (props: {feeding: string}) => {

    const getDate = (feedDate: string) => {
        let date = new Date(feedDate);
        return `${date.getDate()}.${date.getMonth()}.${date.getUTCFullYear()}`
    }


    const checkHours = (hours: number) => {
        if (hours < 10)
            return (`0${hours}`)
        return hours;
    }
    const checkMinutes = (minutes: number) => {
        if (minutes < 10)
            return (`0${minutes}`)
        return minutes;
    }
    const checkSeconds = (seconds: number) => {
        if (seconds < 10)
            return (`0${seconds}`)
        return seconds;
    }

    const getTime = (feedDate: string) => {
        let date = new Date(feedDate);
        let hours = date.getHours();
        let minutes = date.getUTCMinutes();
        let seconds = date.getSeconds();

        return `${checkHours(hours)}:${checkMinutes(minutes)}:${checkSeconds(seconds)}`;
    }

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