import React, {useEffect, useRef, useState} from 'react';
import LocalizedStrings from "react-localization";
import {getTemperature, getTemperatureForChart} from "../fetch/fetchData";
import {Simulate} from "react-dom/test-utils";
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

const CoopElementDesc = (props: {name: string, eggsCount: number, channelId: string, apiKey: string, index: number }) => {
    const [modalActive, setModalActive] = useState(false);

    let strings = new LocalizedStrings({
        en:{
            eggs:"Eggs count this week",
        },
        ru: {
            eggs:"Снесенных яиц за эту неделю",
        }
    });

    const [temp, setTemp] = useState<number>()

    const getTemp = async () => {
        if (props.channelId !== undefined && props.apiKey !== undefined){
            const data = await getTemperature(props.channelId, props.apiKey);
            setTemp(data);
        }
    }

    const checkTemp = () => {
        const audio = new Audio(require('../assets/Cowbell.mp3'))
        if (temp! < 15 || temp! > 22){
            Store.addNotification({
                title: `Temperature isn't normal in ${props.name} coop: ${temp}C`,
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            })
            audio.play()
        }
        else{
            audio.pause()
        }
    }

    useEffect(() => {
        const interval = setInterval(getTemp, 2000)
    }, [])

    useEffect(() => {
        checkTemp()
    }, [temp])

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

            <div className={`coop-temp-circle ${temp! > 15 && temp! < 22 ? 'cooplist-coop-temp-green' : 'cooplist-coop-temp-red'}`}>
                <div className='coop-temp-circle-text'>
                    {temp}&deg;C
                </div>
            </div>
        </div>
    );
};

export default CoopElementDesc;