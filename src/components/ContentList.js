import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ContentListItem from "./ContentListItem";
import { getProductList } from "../action";
import {useStateValue} from '../appProvider'

const ContentList = () => {

  const {products:[productsState, productsDispatch]} = useStateValue();

  console.log("productsState:::",productsState);
  
  const [productList, setProductList] = useState([]);
  useEffect(()=>{
    getProductList(productsDispatch);
  },[]) 
  
  useEffect(()=>{
    setProductList(productsState.productList);
  },[productsState])
  
  return (
    <Container>
      <Row>
        {productList && productList.map((item, index)=>{
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

export default ContentList;
