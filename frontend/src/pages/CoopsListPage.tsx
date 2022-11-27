import React from 'react';
import NavMenu from "../components/NavMenu";
import HeaderSection from "../components/HeaderSection";

const CoopsListPage = () => {
    return (
        <div>
            <NavMenu indexActive={0}/>
            <HeaderSection text={"My Coops"}/>
        </div>
    );
};

export default CoopsListPage;