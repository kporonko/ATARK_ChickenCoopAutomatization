import React from 'react';
import {ICoop} from "../interfaces/ICoop";
import LocalizedStrings from "react-localization";
import { confirmAlert } from 'react-confirm-alert';
import {useParams} from "react-router";
import {deleteCoop} from "../fetch/fetchData";
import {useNavigate} from "react-router-dom"; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const CoopDesc = (props: {coop: ICoop|undefined}) => {

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

    const {id} = useParams()
    const nav = useNavigate()
    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log("aa")
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
                    <div className='coop-desc-info-temp-oval'>
                        <div className="coop-desc-info-temp">34,2&deg;C</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoopDesc;