import React, {useEffect, useState} from 'react';
import MenuItem from './menuItem';

const HeaderMenu = () => {
    const [topMenus, setTopMenus] = useState([
        {label: 'Home', link: 'https://www.csm.tech/in/'}, 
        {label: 'About', link: 'http://www.csm.tech/about'}, 
        {label: 'Login', link: 'http://www.csm.tech/login'}
    ]);
useEffect(()=>{
    setTopMenus([
        {label: 'Home', link: 'https://www.csm.tech/in/'}, 
        {label: 'About', link: 'http://www.csm.tech/about'}, 
        {label: 'Services', link: 'http://www.csm.tech/Services'}, 
        {label: 'Login', link: 'http://www.csm.tech/login'}
    ])
},[])
    
    return (<ul>
        {topMenus.map(menuItem=>{
        return(<MenuItem menu={menuItem} />)
    })}
    </ul>)
}

export default HeaderMenu;