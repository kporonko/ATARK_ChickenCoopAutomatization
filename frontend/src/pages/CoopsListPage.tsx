import React, {useState} from 'react';
import NavMenu from "../components/NavMenu";
import HeaderSection from "../components/HeaderSection";
import AddCoopButton from "../components/AddCoopButton";
import ModalAddCoop from "../components/ModalAddCoop";
import CoopsList from "../components/CoopsList";
import TimerFeeding from "../components/TimerFeeding";

const CoopsListPage = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div>
            <NavMenu indexActive={0}/>
            <HeaderSection text={"My Coops"}/>
            <AddCoopButton setIsActive={setModalActive} isSubmit={false}/>
            <TimerFeeding/>
            <ModalAddCoop isActive={modalActive} setIsActive={setModalActive}/>
            <CoopsList/>
        </div>
    );
};

export default CoopsListPage;