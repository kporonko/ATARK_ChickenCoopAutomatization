import React from 'react';
import LocalizedStrings from 'react-localization';
import {Link} from "react-router-dom";

const NavMenu = (props: {indexActive: number}) => {

    let strings = new LocalizedStrings({
        en:{
            myCoops:"My Coops",
            about:"About App"
        },
        ru: {
            myCoops:"Мои Курятники",
            about:"О Приложении",
        }
    });

    return (
        <div className="nav-wrapper">
            <div className='icon'>
                <img className='nav-icon' src={require('../assets/chicken-coop-icon.png')} alt=""/>
            </div>

            <div style={{display:'flex', gap: '150px'}}>
                <div className='nav-element'>
                    <Link to={'/my-coops'} className='nav-link'>
                        <img className='nav-link-icon' src={require('../assets/7415381.png')} alt=""/>
                        <h2 className={`nav-link-text ${props.indexActive === 0 && 'active-page'}`}>{strings.myCoops}</h2>
                    </Link>
                </div>

                <div className='nav-element'>
                    <Link to={'/about'} className='nav-link'>
                        <img className='nav-link-icon-2' src={require('../assets/about.png')} alt=""/>
                        <h2 className={`nav-link-text ${props.indexActive === 1 && 'active-page'}`}>{strings.about}</h2>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default NavMenu;