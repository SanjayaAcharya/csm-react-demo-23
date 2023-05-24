import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ContentListItem from "./ContentListItem";
import { useStateValue } from "../appProvider";

const ErrorPage = () => {
 
  const {products:[productsState, productsDispatch]} = useStateValue();
  return (
    <Container>
      Page Not Found!
    </Container>
  );
};

export default ErrorPage;
