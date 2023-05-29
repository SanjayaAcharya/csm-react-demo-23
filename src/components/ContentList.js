import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Container, Row } from "react-bootstrap";
import ContentListItem from "./ContentListItem";
import { getProductList } from "../action";
import {useStateValue} from '../appProvider'


const ContentList = () => {
const urlParams = useParams();
const {title = "", id = 0 } =  urlParams || {};
  console.log("routerConfig::::",title)

  const {products:[productsState, productsDispatch]} = useStateValue();

  console.log("productsState:::",productsState);
  
  const [productList, setProductList] = useState([]);
  useEffect(()=>{
    getProductList(productsDispatch, id);
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
