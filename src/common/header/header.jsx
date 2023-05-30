import React, {useEffect, useState} from 'react';
import './header.css'
import HeaderMenu from './headerMenu';
import HeaderContent from './headerContent';
import { Nav } from 'react-bootstrap';
import { useStateValue } from '../../appProvider';

const Header = (props) => {
  const {products:[productsState, productsDispatch]} = useStateValue();


  useEffect(()=>{
    if(productsState.prodDelSuccess){
      alert(productsState.prodDelMsg);
    }
  },[productsState.prodDelSuccess])


    const [topMenus, setTopMenus] = useState([
        {label: 'Home', link: '/'}, 
        {label: 'list', link: '/list/test/123'},
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

    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home" class='test'>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <hr/>
    </>
    )
}

export default Header;