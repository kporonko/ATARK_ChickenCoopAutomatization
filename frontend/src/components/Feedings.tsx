import React from 'react';
import Feeding from "./Feeding";

const Feedings = (props: {feedings: string[]|undefined}) => {
    return (
        <div className='coop-profile-feedings-wrapper'>
            <div className='coop-profile-feeding'>
                {props.feedings?.map((feeding, ind) => (
                    <Feeding key={ind} feeding={feeding}/>
                ))}
            </div>
        </div>
    );
};

export default Feedings;