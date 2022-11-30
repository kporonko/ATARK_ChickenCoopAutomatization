import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import NavMenu from "../components/NavMenu";
import HeaderSection from "../components/HeaderSection";
import {ICoop} from "../interfaces/ICoop";
import {getCoop, getTemperature} from "../fetch/fetchData";
import CoopElementDesc from "../components/CoopElementDesc";
import CoopDesc from "../components/CoopDesc";
import Feedings from "../components/Feedings";
import EggCollects from "../components/EggCollects";
import LocalizedStrings from "react-localization";
import MenuCoopInfo from "../components/MenuCoopInfo";
import {ICoopApiData} from "../interfaces/ICoopApiData";

const CoopDescriptionPage = () => {

    const {id} = useParams()
    const [coop, setCoop] = useState<ICoop>({allFeedingsHistory: [], eggsByWeek: 0, name: "", eggCollects: {string:-1}})
    const [indexActive, setIndexActive] = useState<number>(0)

    const [temp, setTemp] = useState<number>(0)


    useEffect(() => {
        const getCoopData = async () => {
            if (id !== undefined){
                const data = await getCoop(+id);
                setCoop(data);
            }
        }
        getCoopData()
    }, [])
    return (
        <div>
            <NavMenu indexActive={2}/>
            <HeaderSection text={`Coop `} additionalText={coop?.name}/>
            <CoopDesc coop={coop} temp={temp} setTemp={setTemp}/>
            <HeaderSection text={`Information `}/>

            <MenuCoopInfo coop={coop} indexActive={indexActive} setIndexActive={setIndexActive}/>

        </div>
    );
};

export default CoopDescriptionPage;