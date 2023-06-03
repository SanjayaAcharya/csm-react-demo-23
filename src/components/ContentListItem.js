import React from "react";
import { Card, Col } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

const ContentListItem = ({item = {}}) => {
  return (
    <Col xs="3" className="mb-3">
      <Card>
        <img
          className="img-fluid"
          src={item.images[0]}
        />
        <CardHeader>{item.title}</CardHeader>
      </Card>
    </Col>
  );
};

export default ContentListItem;
