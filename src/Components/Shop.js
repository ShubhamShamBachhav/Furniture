import { Row,Col,Button } from "react-bootstrap"
import Products from "./Products"


function Shop() {
  return (
    <div>
          {/* Header part of shop component..... */}
         <Row className='bg-success text-white p-3 text-start m-auto '>  
        <Col>
            <h1 className='fw-bold w-50 mt-5 fs-1'>Shop Now</h1>
            <p className='fs-6 mt-4 mb-4 '>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <Button variant="warning rounded-pill fw-bold p-3 mb-4 w-25">Shop Now</Button>
            <Button variant="outline-dark rounded-pill fw-bold p-3 mb-4 ms-4 w-25">Explore</Button>
        </Col>
        <Col>
            <img src='.\images\couch.png' alt='couch' className='img-fluid m-auto d-block'/>
        
        </Col>
      </Row>

      <Products/>
    
    </div>
  )
}

export default Shop