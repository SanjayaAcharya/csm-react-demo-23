import React from 'react';
import MenuItem from './menuItem';
import './headerMenu.css';
import { Button } from 'react-bootstrap';

const HeaderMenu = ({topMenus}) => {
    
    return (<><ul className='header-menu'>
        {topMenus.map((menuItem, index)=>{
            const iIndex = index;
        return(<MenuItem key={iIndex} menu={menuItem} />)
    })}
    </ul>
    <Button size='lg'>BT Button</Button>
    </>)
}

export default HeaderMenu;