import React from 'react';
import NavMenu from "../components/NavMenu";
import HeaderSection from "../components/HeaderSection";
import AddCoopButton from "../components/AddCoopButton";

const CoopsListPage = () => {
    return (
        <div>
            <NavMenu indexActive={0}/>
            <HeaderSection text={"My Coops"}/>
            <AddCoopButton/>
        </div>
    );
};

export default CoopsListPage;