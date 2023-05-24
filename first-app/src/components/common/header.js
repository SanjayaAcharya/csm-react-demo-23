import React from 'react';
import { useNavigate } from "react-router-dom";
import '../../css/header.css';

function HeaderComponent() {
    const navigate = useNavigate();
    const navigateTo = (url) => {
        navigate(url);
    }
    return (
        <>
            <div className='d-flex align-items-center justify-content-between mb-3'>
                <div className="input-group search-wrapper">
                    <input type="text" className="form-control" placeholder="Search here" />
                    <div className="input-group-append">
                        <button className="btn text-primary" type="button">Search</button>
                    </div>
                </div>
                <button className="btn btn-outline-secondary btn-sm" type="button" onClick={() => navigateTo('/login')}>LOGOUT</button>
            </div>
        </>
    );
}

export default HeaderComponent;