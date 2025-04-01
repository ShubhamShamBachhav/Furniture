import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Blogcard() {
  return (
    <div>
         <Container className='pt-3'>
        <Row>
          <Col>
            <Card style={{ width: "25rem" }} className='border-0'>
              <Card.Img variant="top" src="./images/post-1.jpg" className='rounded-4'/>
              <Card.Body>
                <Card.Title style={{fontSize:'20px'}}>First Time Home Owner Ideas</Card.Title>
                <Card.Text>
                by <b>Kristin Watson</b> on <b>Dec 19,2023 </b>
                </Card.Text>
               
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "25rem" }} className='border-0'>
              <Card.Img variant="top" src="./images/post-2.jpg" className='rounded-4'/>
              <Card.Body>
                <Card.Title>First Time Home Owner Ideas</Card.Title>
                <Card.Text>
                by <b>Kristin Watson</b> on <b>Dec 19,2023 </b>
                </Card.Text>
               
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "25rem" }} className='border-0'>
              <Card.Img variant="top" src="./images/post-3.jpg" className='rounded-4'/>
              <Card.Body >
                <Card.Title>First Time Home Owner Ideas</Card.Title>
                <Card.Text>
                by <b>Kristin Watson</b> on <b>Dec 19,2023 </b>
                </Card.Text>
               
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Blogcard