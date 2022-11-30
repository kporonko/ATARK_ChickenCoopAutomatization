import React, {useEffect, useRef, useState} from 'react';
import LocalizedStrings from "react-localization";
import {getTemperature} from "../fetch/fetchData";
import useSound from 'use-sound';
import ModalAddCoop from "./ModalAddCoop";

const CoopElementDesc = (props: {name: string, eggsCount: number, channelId: string, apiKey: string}) => {
    const [modalActive, setModalActive] = useState(false);

    let strings = new LocalizedStrings({
        en:{
            eggs:"Eggs count this week",
        },
        ru: {
            eggs:"Снесенных яиц за эту неделю",
        }
    });

    const [temp, setTemp] = useState(0)

    const getTemp = async () => {
        if (props.channelId !== undefined && props.apiKey !== undefined){
            const data = await getTemperature(props.channelId, props.apiKey);
            setTemp(data);
        }
    }


    const checkTemp = (url: string) => {
        if (temp < 15 || temp > 18){
            const audio = new Audio(url);
            audio.loop = false;
            audio.play()
        }
    }

    useEffect(() => {
        const interval = window.setInterval(getTemp, 2000)
        setInterval(() => checkTemp(require('../assets/Cowbell.mp3')), 10000)
    }, [])

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

            <div className={`coop-temp-circle ${temp > 15 && temp < 18 ? 'cooplist-coop-temp-green' : 'cooplist-coop-temp-red'}`}>
                <div className='coop-temp-circle-text'>
                    {temp}&deg;C
                </div>
            </div>
        </div>
    );
};

export default CoopElementDesc;