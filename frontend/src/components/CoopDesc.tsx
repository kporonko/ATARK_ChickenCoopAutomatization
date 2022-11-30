import React, {useState} from 'react';
import {ICoop} from "../interfaces/ICoop";
import LocalizedStrings from "react-localization";
import { confirmAlert } from 'react-confirm-alert';
import {useParams} from "react-router";
import {deleteCoop, getTemperature, getTemperatureForChart} from "../fetch/fetchData";
import {useNavigate} from "react-router-dom"; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import {ITempDto} from "../interfaces/ITempDto";
import Chart from "./Chart";
import Loader from "./Loader"; // Import css

const CoopDesc = (props: {coop: ICoop|undefined, temp: number, setTemp: React.Dispatch<React.SetStateAction<number>>}) => {

    const [tempChart, setTempChart] = useState<ITempDto[]>()

    let strings = new LocalizedStrings({
        en:{
            coop:"Coop",
            eggs: "Eggs this week",
            temp: "Coop current temperature"
        },
        ru: {
            coop:"Курятник",
            eggs:"Снесенных яиц за эту неделю",
            temp: "Текущая температура в курятнике"
        }
    });

    const getTemp = async () => {
        if (props.coop?.thermometerIp !== undefined && props.coop?.thermometerApiKey !== undefined){
            const data = await getTemperature(props.coop?.thermometerIp, props.coop?.thermometerApiKey);
            props.setTemp(data);
            const dataChart = await getTemperatureForChart(props.coop?.thermometerIp, props.coop?.thermometerApiKey);
            setTempChart(dataChart)
        }
    }

    const interval = window.setInterval(getTemp, 2000)

    const {id} = useParams()
    const nav = useNavigate()
    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        confirmAlert({
            message:'Are you sure to delete the '+ props.coop?.name+ ' Coop ?',
            title: 'Confirm To Delete',
            buttons:[
                {
                    label: 'Yes',
                    onClick: async () => {
                        const res = await deleteCoop(+id!)
                        if(res === 400)
                            alert("Oops... Something went wrong")
                        else
                            nav('/my-coops')
                    }
                },
                {
                    label: 'No',
                }
            ]
        })
    }

    return (
        <div className='coop-desc-wrapper'>
            <div className='coop-desc-img-wrapper'>
                <img className='coop-desc-img' src={require('../assets/chicken-coop.webp')} alt=""/>
            </div>

            <div className='coop-desc-info-wrapper'>
                <div className='button-delete-wrapper'>
                    <button onClick={(e) => handleDelete(e)} className="button-delete"><i className="fa fa-trash"></i></button>
                </div>
                <div>
                    <h2 className='coop-desc-info-name'>{strings.coop}</h2>
                    <h2 className='coop-desc-info-name'>"{props.coop?.name}"</h2>
                </div>

                <div>
                    <h3 className='coop-desc-info-eggs-text'>{strings.eggs}:</h3>
                    <div className='coop-desc-info-eggs-circle'>
                        <div className='coop-desc-info-eggs'>{props.coop?.eggsByWeek}</div>
                    </div>
                </div>

                <div>
                    <h3 className="coop-desc-info-temp-text">{strings.temp}:</h3>
                    <div className={`coop-desc-info-temp-oval ${props.temp < 18 && props.temp > 15 ? 'temp-green' : 'temp-red'}`}>
                        <div className="coop-desc-info-temp">{props.temp}&deg;C</div>
                    </div>
                </div>
                {tempChart !== undefined ? <Chart data={tempChart}/> : <Loader/>}
            </div>
        </div>
    );
};

export default CoopDesc;