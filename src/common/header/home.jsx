import React, { useState } from 'react';
import './menuItem.css';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Header from './header';

const Home = () => {
 
  
    return (
        <>
            <Header title="Home Page" desc="My Home page content" />
            <Outlet />
        </>

    )
}

export default Home;