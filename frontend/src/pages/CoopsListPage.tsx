import React, {useState} from 'react';
import NavMenu from "../components/NavMenu";
import HeaderSection from "../components/HeaderSection";
import AddCoopButton from "../components/AddCoopButton";
import ModalAddCoop from "../components/ModalAddCoop";

const CoopsListPage = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div>
            <NavMenu indexActive={0}/>
            <HeaderSection text={"My Coops"}/>
            <AddCoopButton setIsActive={setModalActive} isSubmit={false}/>
            <ModalAddCoop isActive={modalActive} setIsActive={setModalActive}/>
        </div>
    );
};

export default CoopsListPage;