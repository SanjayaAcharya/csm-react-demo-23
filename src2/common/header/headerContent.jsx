import React from 'react';
import _ from 'lodash';

const HeaderContent = ({setTopMenus, topMenus}) => {

    const handleTopMenus = ((newItem, targetIndex) => {
        const iTopMenus = _.cloneDeep(topMenus);
        if(targetIndex){
            iTopMenus.splice(targetIndex,0, newItem);
        }else{
            iTopMenus.push(newItem);
        }
        setTopMenus(iTopMenus);
    });
    return (<>
   <button className='btn btn-primary btn-lg'  onClick={()=>handleTopMenus({label: 'Login', link: 'http://www.csm.tech/login'})} >Show Extra</button>
    </>)
}


export default HeaderContent;