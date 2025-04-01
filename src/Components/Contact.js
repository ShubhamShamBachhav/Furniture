import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { CiPhone } from "react-icons/ci";



function Contact() {
  return (
    <div> <Row className='bg-success text-white p-3 text-start m-auto '>
    <Col>
        <h1 className='fw-bold w-50 mt-5 fs-1 '>Contact Us</h1>
        <p className='fs-6 mt-4 mb-4 '>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
        <Button variant="warning rounded-pill fw-bold p-3 mb-4 w-25">Shop Now</Button>
        <Button variant="outline-dark rounded-pill fw-bold p-3 mb-4 ms-4 w-25">Explore</Button>
    </Col>
    
  </Row>
  <Container fluid className='bg-light'>
    <Row className='m-5 p-5 align-items-center'>
      <Col md={1} >
      <div className='bg-success text-white h-75 w-75 py-2 rounded rounded-2 text-center '><FaLocationDot className='fs-4 '/></div>
      </Col>
      <Col md={3} className='text-start'><p>43 Raymouth Rd.<br/> Baltemoer, London <br/> 3910</p></Col>

      <Col md={1}>
      <div className='bg-success text-white h-75 w-75 py-2 rounded rounded-2 text-center'><MdOutlineLocalPostOffice className='fs-4'/></div>
      </Col>
      <Col md={3} className='text-start'><p>info@yourdomain.com</p></Col>

      <Col md={1}>
      <div className='bg-success text-white h-75 w-75 py-2 rounded rounded-2 text-center'><CiPhone className='fs-4'/></div>
      </Col>
      <Col md={3} className='text-start'><p>+1 294 3925 3939</p></Col>
      
    </Row>
  <Form>
  <Row className="mb-1 text-start px-5 mx-5">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name </Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
      </Row>

      <Form.Group className="mb-1 text-start px-5 mx-5" controlId="formGridAddress1">
        <Form.Label>Email</Form.Label>
        <Form.Control type='emial'/>
      </Form.Group>

      <Form.Group className="mb-1 text-start px-5 mx-5" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>
      <div className='px-5 mt-3'>
      <Button variant='dark' className='mb-5 rounded-pill px-4 mx-5 '>Send Message</Button>
      </div>
    </Form>

  </Container>

  
  </div>
  )
}

export default Contact