import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ContentListItem from "./ContentListItem";
import { useStateValue } from "../appProvider";

const ContentList1 = () => {



 
  const {products:[productsState, productsDispatch]} = useStateValue();




  return (
    <Container>
      <Row>
        {productsState.productList && productsState.productList.map((item, index)=>{
if(index<5){
            return(
         
            <ContentListItem item={item}/>
           
            )
}
        })}
      </Row>
    </Container>
  );
};

export default ContentList1;
