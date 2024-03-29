import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import dashboard from "../data/dashboard.json";
const DashBoard: React.FC = () => {
  return (
    <Container>
      <Row>
        {dashboard.data.map((val) => (
          <Col key={val.id} xs={11} sm={6} md={4} lg={3} className="charts">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{val.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>hi</Row>
    </Container>
  );
};

export default DashBoard;