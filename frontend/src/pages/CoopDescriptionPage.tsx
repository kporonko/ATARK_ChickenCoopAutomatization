import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import NavMenu from "../components/NavMenu";
import HeaderSection from "../components/HeaderSection";
import {ICoop} from "../interfaces/ICoop";
import {getCoop} from "../fetch/fetchData";

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
    console.log(coop?.name)
    return (
        <div>
            <NavMenu indexActive={2}/>
            <HeaderSection text={`Coop `} additionalText={coop?.name}/>
        </div>
    );
};

export default CoopDescriptionPage;