import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Testimonial from './Testimonial';

import { Container } from 'react-bootstrap';
import Craft from './Craft';

function Service() {
  return (
    <div>
      <Row className='bg-success text-white p-3 text-start m-auto '>
        <Col>
            <h1 className='fw-bold w-50 mt-5 fs-1'>Service</h1>
            <p className='fs-6 mt-4 mb-4 '>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <Button variant="warning rounded-pill fw-bold p-3 mb-4 w-25">Shop Now</Button>
            <Button variant="outline-dark rounded-pill fw-bold p-3 mb-4 ms-4 w-25">Explore</Button>
        </Col>
       
      </Row>
      <Container fluid className='bg-light text-start p-5 mt-5 mb-5'>
      <table className='table table-borderless table-light'>
            <tr>
                <td>
                    <img src='./images/truck.svg' alt=''/>
                    <h6>Fast & Free Shipping</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
                <td>
                    <img src='./images/bag.svg' alt=''/>
                    <h6>Easy to Shop</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
            
            
                <td>
                    <img src='./images/support.svg' alt=''/>
                    <h6>24/7 Support</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
                <td>
                    <img src='./images/return.svg' alt=''/>
                    <h6>Hassle Free Returns</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
            </tr>
        </table>
        <table className='table table-borderless table-light'>
            <tr>
                <td>
                    <img src='./images/truck.svg' alt=''/>
                    <h6>Fast & Free Shipping</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
                <td>
                    <img src='./images/bag.svg' alt=''/>
                    <h6>Easy to Shop</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
            
                <td>
                    <img src='./images/support.svg' alt=''/>
                    <h6>24/7 Support</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
                <td>
                    <img src='./images/return.svg' alt=''/>
                    <h6>Hassle Free Returns</h6>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </td>
            </tr>
        </table>
      </Container>
      <Craft/>
      <Testimonial/>
  
    </div>
  )
}

export default Service