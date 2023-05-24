import React from 'react';
import MenuItem from './menuItem';
import './headerMenu.css';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const HeaderMenu = ({topMenus}) => {
    
    return (<><ul className='header-menu'>
        {topMenus.map((menuItem, index)=>{
            const iIndex = index;
        return(<MenuItem key={iIndex} menu={menuItem} />)
    })}
    </ul>
    <br/>
    </>)
}

export default HeaderMenu;