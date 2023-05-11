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
        setTopMenus(iTopMenus);
    });
   
    useEffect(()=>{
        console.log("topMenus::XXXXXXX")
    },[])
    console.log("topMenus::",topMenus)
    return (<><ul>
        {topMenus.map(menuItem=>{
        return(<MenuItem menu={menuItem} />)
    })}
    </ul>
    
    <button onClick={()=>handleTopMenus({label: 'Login', link: 'http://www.csm.tech/login'})} >Login</button>
   
    </>)
}

export default HeaderMenu;