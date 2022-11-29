import React, {useState} from 'react';
import LocalizedStrings from "react-localization";
import HeaderSection from "./HeaderSection";
import AddCoopButton from "./AddCoopButton";
import {addCoop} from "../fetch/fetchData";
import {ICoopAdd} from "../interfaces/ICoopAdd";

const ModalAddCoop = (props: {isActive: boolean, setIsActive:  React.Dispatch<React.SetStateAction<boolean>>}) => {

    let strings = new LocalizedStrings({
        en:{
            add:"Add New Coop",
            name: "Coop Name",
            enterName: "Enter coop name...",
            id: "Enter Thingspeak channel id",
            enterId: "Введите имя курятника...",
        },
        ru: {
            add:"Добавить Новый Курятник",
            name: "Название Курятника",
            enterName: "Введите имя курятника...",
            id: "ID канала Thing Speak",
            enterId: "Введите ID канала Thing Speak...",
        }
    });



    const [name, setName] = useState('');
    const [id, setId] = useState(0);


    return (
        <div
            className={props.isActive? "modal-add-coop-wrap" : "modal-add-coop-wrap-hidden"}
            onClick={(e) => {
                props.setIsActive(false)}
            }
        >
            <div
                className='modal-add-coop'
                onClick={(e) => e.stopPropagation()}
            >
                <div style={{margin: '15px'}}>
                    <HeaderSection text={'Add New Coop'}/>
                </div>
                <form className='form-modal-add-coop'>
                    <div style={{margin: '30px 0'}}>
                        <div style={{margin: '10px 0'}}>
                            <label className="modal-add-coop-form-label" htmlFor="coopName">{strings.name}</label>
                        </div>
                        <div>
                            <input
                                className="modal-add-coop-form-input"
                                id="coopName" value={name}
                                type="text"
                                placeholder={strings.enterName}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div style={{margin: '30px 0'}}>
                        <div style={{margin: '10px 0'}}>
                            <label className="modal-add-coop-form-label" htmlFor="channelId">{strings.id}</label>
                        </div>
                        <div>
                            <input
                                className="modal-add-coop-form-input"
                                id="channelId"
                                value={id}
                                type="number"
                                placeholder={strings.enterId}
                                onChange={(e) => setId(+e.target.value)}
                            />
                        </div>
                    </div>

                    <div style={{margin: '40px 0'}}>
                        <AddCoopButton name={name} id={id} setIsActive={() => {}} isSubmit={true}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalAddCoop;