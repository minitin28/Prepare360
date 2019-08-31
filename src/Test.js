import React from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import './Teststyle.css';
import { Link } from 'react-router-dom';
const Test = () => {
    return(
        // <div className="Teststyle">
        //         {/* <h2>Welcome to Test page</h2> */}
                <div className="Pad">
        <Container>
          <Row className="justify-content-center">
            <Col md="12">
              <CardGroup>
                <Card className="p-4">
                  <CardBody className="text-left">
                    <Form>
                      <h1>C and C++</h1>
                      <p className="text-muted">Contains basic to intermediate level of problems necessary for Interview purpose.</p>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-2">Start Test</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="p-4">
                  <CardBody className="text-left">
                    <Form>
                      <h1>Java</h1>
                      <p className="text-muted">Contains Theory as well as Logical Interview questions.</p>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Start Test</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>

                <Card className="p-4">
                  <CardBody className="text-left">
                    <Form>
                      <h1>DFS and DBMS</h1>
                      <p className="text-muted">Contains basic to intermediate level of problems necessary for Interview purpose.</p>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Start Test</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>

                <Card className="p-4">
                  <CardBody className="text-left">
                    <Form>
                      <h1>Aptitude</h1>
                      <p className="text-muted">Contains frequently asked questions.</p>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Start Test</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                

              </CardGroup>
            </Col>
          </Row>
        </Container>
        </div>
    )
}

export default Test;