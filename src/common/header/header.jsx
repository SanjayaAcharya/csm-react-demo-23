import React from 'react';
import './header.css'
import HeaderMenu from './headerMenu';

const Header = (props) => {
   
    
    return (
    <>

    <HeaderMenu />

    <br/>
    <br/>
    <header>{props.title}</header>
    <p>{props.desc}</p>
    </>
    )
}

export default Header;