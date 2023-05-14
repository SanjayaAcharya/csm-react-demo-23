import React from 'react';

const HeaderContent = ({setTopMenus, topMenus}) => {

    const handleTopMenus = ((newItem, targetIndex) => {
        const iTopMenus = topMenus;
        if(targetIndex){
            iTopMenus.splice(targetIndex,0, newItem);
        }else{
            iTopMenus.push(newItem);
        }
        setTopMenus(iTopMenus);
    });

    return (<>
   <button onClick={()=>handleTopMenus({label: 'Login', link: 'http://www.csm.tech/login'})} >Show Extra</button>

    </>)
}

export default HeaderContent;