import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import {useStateValue} from '../appProvider'
import { callSaveFormDataAPI } from "../action";

const UserForm = () => {

  const {products:[productsState, productsDispatch]} = useStateValue();

  const [formData, setFormData] = useState({name:'CSM'});
  const [formError, setFormerror] = useState();
    const handleFormData = (e) => {

        const {target:{value: fieldValue, name: fieldName}} = e;
if(fieldName && fieldValue){
            setFormData({...formData, [fieldName] : fieldValue});
}else{
    setFormerror("Field name not found")
}
    }
    const saveFormData = () => {
        callSaveFormDataAPI(formData, productsDispatch);
    }
    console.log("formData:::",formData);
    return (

        <Container>
            <Form className="mb-5">
                {formError && <Alert variant="danger">{formError}</Alert>}
                <Row>
                    <Col xs="4">
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Name" value={formData.name} onChange={handleFormData} />
                </Form.Group>
                </Col>
                <Col xs="4">
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" value={formData.email} onChange={handleFormData}/>
                </Form.Group>
                </Col>
                <Col xs="4">
                <Form.Group>
                    <Form.Label>Mobile:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Mobile" value={formData.mobile}/>
                </Form.Group>
                </Col>
                <Col xs="4">
                <Form.Group>
                    <Form.Label>Country:</Form.Label>
                    <Form.Select aria-label="Default select example" value={formData.country}>
                        <option>Open this select menu</option>
                        <option value="1">India</option>
                        <option value="3">Nepal</option>
                        <option value="2">Pakistan</option>
                    </Form.Select>
                </Form.Group>
                </Col>
                <Col xs="6">
                <Form.Group>
                    <Form.Label>Gender:</Form.Label><br/>
                    <Form.Check
                        inline
                        label="Male"
                        name="gender"
                        type="radio"
                        id="inline-radio-1"
                    />
                    <Form.Check
                        inline
                        label="Female"
                        name="gender"
                        type="radio"
                        id="inline-radio-2"
                    />
                </Form.Group>
                </Col>
                <Col xs="2" className="mt-2">
                    <Button onClick={saveFormData}>Call API</Button>
                </Col>
                </Row>
            </Form>
        </Container>
    )
}
export default UserForm;