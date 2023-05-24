import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../imgs/CSM-TM-logo.png';
import '../../css/sidemenu.css';

function SideMenuComponent() {
    const navigate = useNavigate();
    const navigateTo = (url) => {
        navigate(url);
    }
    return (
        <>
            <div className='logo'><img src={logo} alt='csm logo' /></div>
            <div className="list-group mt-5">
                <button onClick={() => navigateTo('dashboard')} className="list-group-item list-group-item-action">Dashboard</button>
                <button onClick={() => navigateTo('view-list')} className="list-group-item list-group-item-action">Users List</button>
                <button onClick={() => navigateTo('registration')} className="list-group-item list-group-item-action">Registration</button>
            </div>
        </>
    );
}

export default SideMenuComponent;