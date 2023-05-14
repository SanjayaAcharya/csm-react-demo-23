import React, { useState } from 'react';
import './menuItem.css';

const MenuItem = ({menu:{label:menuLabel, link:MenuLink}} ) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
    <li>
        <a href={MenuLink} className={isActive?'active':''}>{menuLabel}</a>
        <button onClick={()=>setIsActive(true)}>Active</button>

    </li>
    </>
    )
}

export default MenuItem;