import React from 'react';

const MenuItem = ({menu, doClick} ) => {
    const {label: menuLabel, link: MenuLink} = menu;
    
    return (
        <>
    <li>
        <a href={MenuLink}>{menuLabel}</a>
        {menuLabel === 'Home'  && <button onClick={()=>doClick({label: 'Login', link: 'http://www.csm.tech/login'})} >Login</button>}
    </li>
    </>
    )
}

export default MenuItem;