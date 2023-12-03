import React from "react";
import {
  Card,
  CardHeader,
  CardText,
  Col,
  Container,
  Form,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { permitToUnload } from "./forms";
import tasksActionList from "../../configData/tasksConfig/tasksActionList";

const BasicForm = (props: any) => {
  return (
    <Container fluid className="overflow-auto" style={{height:"80vh"}}>
      <Card style={{ overflowY: "auto" }}>
        <CardHeader>
          <Row>
            <Col>
              <CardText>
      
                Form Ref:{props.formRef} {props.formData.title}
              </CardText>
            </Col>
            <Col>
              <NavDropdown
                className="d-flex justify-content-end"
                title="ACTIONS"
                id="basic-nav-dropdown"
              >
                {tasksActionList.map((item) => {
                  return (
                    <>
                      <NavDropdown.Item href={item.id} key={item.id}>
                        {item.name}
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                    </>
                  );
                })}
              </NavDropdown>
            </Col>
          </Row>
        </CardHeader>
      </Card>

      <Card>
        <Form>
          <Form.Group className="m-3" controlId="formBasicEmail">
            {permitToUnload.map((item) => (
              <Form.Group as={Row}>
                <Form.Label column>{item.title}</Form.Label>
                <Col>
                  <Form.Control as={item.as} type={item.type} />
                </Col>
              </Form.Group>
            ))}
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
};

export default BasicForm;
