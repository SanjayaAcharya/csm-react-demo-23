import React, { useState } from 'react';
import './menuItem.css';
import { Link, NavLink } from 'react-router-dom';

const MenuItem = ({menu:{label:menuLabel, link:MenuLink}} ) => {
 
    const elementStyle = {
        liStyle: { display: 'inline-block'},
        ancStyle: {textDecoration: 'none', padding: '5px 10px'}
    }

    return (
        <>
    <li style={elementStyle.liStyle}>
        {/* <a  href={MenuLink} >{menuLabel}</a> */}
        <NavLink style={isActive => ({
    color: isActive ? "green" : "blue",
    ...elementStyle.ancStyle
  })} to={MenuLink} >{menuLabel}</NavLink>
    </li>
    </>
    )
}

export default MenuItem;