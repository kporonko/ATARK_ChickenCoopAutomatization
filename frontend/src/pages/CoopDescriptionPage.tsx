import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import NavMenu from "../components/NavMenu";
import HeaderSection from "../components/HeaderSection";
import {ICoop} from "../interfaces/ICoop";
import {getCoop} from "../fetch/fetchData";
import CoopElementDesc from "../components/CoopElementDesc";
import CoopDesc from "../components/CoopDesc";

const CoopDescriptionPage = () => {

    const {id} = useParams()
    const [coop, setCoop] = useState<ICoop>()

    useEffect(() => {
        const getCoopData = async () => {
            if (id !== undefined){
                const data = await getCoop(+id);
                console.log(data);
                setCoop(data);
            }
        }
        getCoopData()
    }, [])
    return (
        <div>
            <NavMenu indexActive={2}/>
            <HeaderSection text={`Coop `} additionalText={coop?.name}/>
            <CoopDesc coop={coop}/>
        </div>
    );
};

export default CoopDescriptionPage;