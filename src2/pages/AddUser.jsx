import React from 'react';

import  { Form, Container, Row, Col ,Button} from 'react-bootstrap';
import UserListPage from './UserListPage';

function AddUser() {
  return (
    <Container>
        <Row>
            <Col md="5">
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Gender</Form.Label>
                        <Form.Check type="radio" name="gender" id="male" label="Male" />
                        <Form.Check type="radio" name="gender" id="female" label="Female" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="mobile">
                        <Form.Label>Mobile No.</Form.Label>
                        <Form.Control type="text" placeholder="Enter Mobile" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Example Address</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Col>
            <Col md='6'>
                <UserListPage></UserListPage>
            </Col>
        </Row>
    </Container>
  );
}

export default AddUser;