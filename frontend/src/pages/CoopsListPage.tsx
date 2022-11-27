import React from 'react';
import NavMenu from "../components/NavMenu";
import HeaderSection from "../components/HeaderSection";
import AddCoopButton from "../components/AddCoopButton";
import ModalAddCoop from "../components/ModalAddCoop";

const CoopsListPage = () => {
    return (
        <div>
            <NavMenu indexActive={0}/>
            <HeaderSection text={"My Coops"}/>
            <AddCoopButton isSubmit={false}/>
            <ModalAddCoop/>
        </div>
    );
};

export default CoopsListPage;