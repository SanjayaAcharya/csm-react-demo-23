import React from 'react';

const MenuItem = (props) => {
   
    return (<li><a href={props.menu.link}>{props.menu.label}</a></li>)
}

export default MenuItem;