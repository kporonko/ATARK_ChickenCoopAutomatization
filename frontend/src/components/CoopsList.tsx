import React, {useEffect, useState} from 'react';
import {getAllProfileCoops} from "../fetch/fetchData";
import {IProfileCoops} from "../interfaces/IProfileCoops";
import CoopElementDesc from "./CoopElementDesc";
import {ICoopSmallDesc} from "../interfaces/ICoopSmallDesc";
import Loader from "./Loader";
import {Link} from "react-router-dom";

const CoopsList = () => {
    const [coops, setCoops] = useState<ICoopSmallDesc[]>()
    useEffect(() => {
        const getCoops = async () => {
            const profileId = localStorage.getItem('id');
            if (profileId !== null){
                const res = await getAllProfileCoops(+profileId);
                setCoops(res)
            }
        }
        getCoops()
    }, [])
    return (
        <div className='coops-wrapper'>
            {coops !== undefined ? coops.map((coop, ind) => (
                <Link style={{textDecoration: 'none'}} key={ind} to={`/coop/${coop.id}`}>
                    <CoopElementDesc key={ind} name={coop.name} eggsCount={coop.eggsByWeek} channelId={coop.thermometerIp} apiKey={coop.thermometerApiKey}/>
                </Link>
            )) : <Loader/>}
        </div>
    );
};

export default CoopsList;