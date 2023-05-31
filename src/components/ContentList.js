import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Container, Row } from "react-bootstrap";
import ContentListItem from "./ContentListItem";
import { delProd, getProductList } from "../action";
import {store, useStateValue} from '../appProvider'


const ContentList = () => {
const urlParams = useParams();
const {title = "", id = 0 } =  urlParams || {};
  console.log("routerConfig::::",title)

  const {products:[productsState, productsDispatch]} = useStateValue();

  console.log("productsState:::",productsState.prodDelSuccess);

  
  const [productList, setProductList] = useState([]);
  useEffect(()=>{
    getProductList(productsDispatch, id);
    delProd(productsDispatch);
  },[]) 
  
  useEffect(()=>{
    setProductList(productsState.productList);
  },[productsState])
  const {productList: rdxProductList, productCount} = store.getState() || {};
  
  return (
    <Container>
      {productCount}
      <Row>
        {rdxProductList && rdxProductList.map((item, index)=>{
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
