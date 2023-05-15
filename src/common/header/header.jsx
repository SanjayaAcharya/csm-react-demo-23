import React, {useEffect, useState} from 'react';
import './header.css'
import HeaderMenu from './headerMenu';
import HeaderContent from './headerContent';

const Header = (props) => {



    const [topMenus, setTopMenus] = useState([
        {label: 'Home', link: 'https://www.csm.tech/in/'}, 
        {label: 'About', link: 'http://www.csm.tech/about'},
        {label: 'Services', link: 'http://www.csm.tech/Services'},
    ]);
    return (
    <>
    <HeaderMenu  topMenus={topMenus}  />
    <HeaderContent setTopMenus={setTopMenus} topMenus={topMenus} />
    <br/>
    <br/>
    <header>{props.title}</header>
    <p>{props.desc}</p>
    </>
    )
}

export default Header;