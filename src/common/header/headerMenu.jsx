import React from 'react';
import MenuItem from './menuItem';

const HeaderMenu = ({topMenus}) => {
    
    return (<><ul>
        {topMenus.map((menuItem, index)=>{
            const iIndex = index;
        return(<MenuItem key={iIndex} menu={menuItem} />)
    })}
    </ul>
    </>)
}

export default HeaderMenu;