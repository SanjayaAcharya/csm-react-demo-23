import React, { useState } from 'react';
import './menuItem.css';

const MenuItem = ({menu:{label:menuLabel, link:MenuLink}} ) => {
 
    const elementStyle = {
        liStyle: { display: 'inline-block'},
        ancStyle: {textDecoration: 'none', padding: '5px 10px'}
    }

    return (
        <>
    <li style={elementStyle.liStyle}>
        <a style={elementStyle.ancStyle} href={MenuLink} >{menuLabel}</a>
    </li>
    </>
    )
}

export default MenuItem;