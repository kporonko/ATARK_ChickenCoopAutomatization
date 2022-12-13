import React from 'react';
import Loader from "./Loader";
import EggCollect from "./EggCollect";
import {IEggCollect} from "../interfaces/IEggCollect";

const EggCollects = (props: {collects: IEggCollect}) => {
    return (
        <div className='coop-profile-feedings-wrapper'>
            {props.collects !== undefined ?  Object.keys(props.collects).map((item, i) => {
                    return <EggCollect key={i} date={item} count={props.collects[item]}/>
            }) : <Loader/>}
        </div>
    );
};

export default EggCollects;