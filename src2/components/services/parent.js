import React from "react";
import { Container } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Parent = () => {
 
  
  return (
<>
    <Container>
      <NavLink to="wd">Web Development</NavLink><br/>
      <NavLink to="ad">App Development</NavLink><br/>
      <NavLink to="dm">Digital Mrktg</NavLink>
    </Container>
    <Outlet/>
    </>
  );
};

export default Parent;
