import React, {useEffect, useState} from 'react';
import MenuItem from './menuItem';

const HeaderMenu = () => {
    const [topMenus, setTopMenus] = useState([
        {label: 'Home', link: 'https://www.csm.tech/in/'}, 
        {label: 'About', link: 'http://www.csm.tech/about'},
        {label: 'Services', link: 'http://www.csm.tech/Services'},
    ]);

    const handleTopMenus = ((newItem, targetIndex) => {
        const iTopMenus = topMenus;
        if(targetIndex){
            iTopMenus.splice(targetIndex,0, newItem);
        }else{
            iTopMenus.push(newItem);
        }
        console.log("aasas", iTopMenus)
        setTopMenus(iTopMenus);
    });
   
    useEffect(()=>{
        console.log("topMenus::XXXXXXX")
    },[topMenus])
    console.log("topMenus:XXX:",topMenus)
    return (<><ul>
        {topMenus.map(menuItem=>{
        return(<MenuItem menu={menuItem} doClick={handleTopMenus} />)
    })}
    </ul>
    
    <button>Login</button>
   
    </>)
}

export default HeaderMenu;