import React, {useState} from 'react';
import {checkHours, checkMinutes, checkSeconds,convertMsToTime} from '../functions/functions'
import LocalizedStrings from "react-localization";

const TimerFeeding = () => {


    const [time, setTime] = useState('')

    let ff = localStorage.getItem('firstFeeding');
    let sf = localStorage.getItem('secondFeeding')

    let dateNow = new Date()
    let date1 = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), +(ff!.substring(0, 2)), +(ff!.substring(3, 5)));
    let date2 = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), +(sf!.substring(0, 2)), +(sf!.substring(3, 5)));

    let strings = new LocalizedStrings({
        en:{
            done:"Today all feedings are done",
            left: 'Time until next feeding: '
        },
        ru: {
            done:"На сегодня все кормежки завершены",
            left: 'Время до следующей кормежки: '
        }
    });

    const getTimeToFeeding = () => {
        const firstTime =  date1.getTime() - getCurrTime().getTime();
        const secondTime = date2.getTime() - getCurrTime().getTime();

        if (firstTime > 0 && secondTime < 0)
             setTime(convertMsToTime(firstTime));
        else if (firstTime < 0 && secondTime > 0)
            setTime(convertMsToTime(secondTime));
        else if (firstTime > 0 && secondTime > 0){
            if (firstTime >= secondTime)
                setTime(convertMsToTime(secondTime))
            else
                return convertMsToTime(firstTime)
        }
        else if (firstTime < 0 && secondTime < 0){
            return setTime(strings.done);
        }
    }

    setInterval(getTimeToFeeding, 1000)

    const getCurrTime = () => {
        return new Date()
    }

    return (
        <div className='timer-feeding-wrapper'>
            <div>
                <div className='timer-feeding-text'>{strings.left}</div>
                <div className='timer-feeding'>
                    {time}
                </div>
            </div>
        </div>
    );
};

export default TimerFeeding;