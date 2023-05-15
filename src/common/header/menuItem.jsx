import React, { useState } from 'react';
import './menuItem.css';

const MenuItem = ({menu:{label:menuLabel, link:MenuLink}} ) => {
 
    return (
        <>
    <li>
        <a href={MenuLink}>{menuLabel}</a>
    </li>
    </>
    )
}

export default MenuItem;