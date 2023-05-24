import React, {useEffect, useState} from 'react';
import './header.css'
import HeaderMenu from './headerMenu';
import HeaderContent from './headerContent';

const Header = (props) => {



    const [topMenus, setTopMenus] = useState([
        {label: 'Home', link: '/'}, 
        {label: 'list', link: '/list'},
        {label: 'list1', link: '/list1'},
        {label: 'Services', link: '/services'},
    ]);
    return (
    <>
    <HeaderMenu  topMenus={topMenus}  />
    <HeaderContent setTopMenus={setTopMenus} topMenus={topMenus} />
    <br/>
    <br/>
    <header>{props.title}</header>
    <p>{props.desc}</p>
    <hr/>
    </>
    )
}

export default Header;