import React from 'react';
import { Outlet } from "react-router-dom";
import '../css/landing.css'

import HeaderComponent from './common/header';
import FooterComponent from './common/footer';
import SideMenuComponent from './common/sideMenu';

function LandingComponent() {
    return (
        <>
            <div className='content-wrapper'>
                <div className='side-menu'>
                    <SideMenuComponent />
                </div>
                <div className='content-body'>
                    <HeaderComponent />
                    <div className='body-wrapper shadow-sm p-4'>
                        <Outlet />
                    </div>
                    <FooterComponent />
                </div>
            </div>
        </>
    );
}

export default LandingComponent;