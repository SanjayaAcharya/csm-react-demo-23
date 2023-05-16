import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ContentListItem from "./ContentListItem";

const ContentList = () => {
  const productListAPIURL = "https://dummyjson.com/products";
  const [productList, setProductList] = useState([]);
  useEffect(()=>{
    fetch(productListAPIURL)
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        setProductList(json.products)
    }
    );
  },[])
  console.log("productList:",productList)
  return (
    <Container>
      <Row>
        {productList.map((item, index)=>{
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
