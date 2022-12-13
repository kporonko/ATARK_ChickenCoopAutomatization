import React from 'react';
import LocalizedStrings from "react-localization";
import Feedings from "./Feedings";
import EggCollects from "./EggCollects";
import {ICoop} from "../interfaces/ICoop";
import EmptyComponent from "./EmptyComponent";

const MenuCoopInfo = (props: {indexActive: number, coop: ICoop, setIndexActive: React.Dispatch<React.SetStateAction<number>>}) => {

    let strings = new LocalizedStrings({
        en:{
            feed:"Feedings",
            eggCol: "Eggs Collects",

        },
        ru: {
            feed:"Кормежки",
            eggCol: "Сборы яиц",

        }
    });

    const handleClick0 = () => {
        props.setIndexActive(0)
    }
    const handleClick1 = () => {
        props.setIndexActive(1)
    }

    return (
        <div>
            <div style={{display:'flex', justifyContent: "center", gap: '200px'}}>
                <div onClick={() => handleClick0()} className={`coop-option-text ${props.indexActive === 0 && 'coop-option-active'}`}>
                    {strings.feed}
                </div>
                <div onClick={() => handleClick1()}  className={`coop-option-text ${props.indexActive === 1 && 'coop-option-active'}`}>
                    {strings.eggCol}
                </div>
            </div>
            {props.indexActive === 0 ? (props.coop?.allFeedingsHistory.length > 0 ? <Feedings feedings={props.coop?.allFeedingsHistory}/> : <EmptyComponent/>) : props.indexActive === 1 ? ( Object.keys(props.coop?.eggCollects).length > 0 ? <EggCollects collects={props.coop?.eggCollects}/> : <EmptyComponent/>) : ''}
        </div>
    );
};

export default MenuCoopInfo;