import React from 'react';
import "./JumbotronPage.css"

import { 
  Button, 
  Container, 
  Col, 
  Row,
  Card,
  CardBody
  } from 'reactstrap';

const JumbotronPage = (props) => {
  return (
    <div className="section section-typo">
    <img
      alt="..."
      className="path"
      src={require("../../assets/img/path4.png")}
    />



      <Container>
      <Card>
        <CardBody>
          <Row>
            <Col lg="9">
              <h1 className="display-3 card-title">Book Today!</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, perferendis fugiat totam nulla enim minus molestiae nisi possimus officia nam?</p>
              <hr className="my-2" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi magnam voluptatum nemo quidem ullam ex! Autem dolores nostrum recusandae. Repellendus.</p>
              {/* <p className="lead"> */}
                <br/>
              <Button color="primary">Browse Latest</Button>
              {/* </p> */}
            </Col>
            <Col lg="3">
              <img src="https://placeimg.com/640/480/tech" alt=""/>
            </Col>
          </Row>
        </CardBody>
      </Card>
      </Container>
    </div>
  );
};

export default JumbotronPage;