import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
function Team(){
    return (
      <div>
        <Container className='mb-5  '>
        <Row>
          <Col >
            <Card style={{ width: "18rem" }} className='border-0'>
              <Card.Img variant="top" src="./images/person_1.jpg" />
              <Card.Body>
                <Card.Title><a href='/'>Lawson Arnold</a></Card.Title>
                <Card.Text>
                 <p>CEO, Founder, Atty.</p>
                 <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                 <a href='/'>Learn More</a>
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className='border-0'>
              <Card.Img variant="top" src="./images/person_2.jpg" />
              <Card.Body>
                <Card.Title><a href='/'>Kathryn Ryan</a></Card.Title>
                <Card.Text>
                 <p>CEO, Founder, Atty.</p>
                 <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                 <a href='/'>Learn More</a>
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className='border-0'>
              <Card.Img variant="top" src="./images/person_3.jpg" />
              <Card.Body>
                <Card.Title><a href='/'>Patrik White</a></Card.Title>
                <Card.Text>
                 <p>CEO, Founder, Atty.</p>
                 <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                 <a href='/'>Learn More</a>
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className='border-0'>
              <Card.Img variant="top" src="./images/person_4.jpg" />
              <Card.Body>
                <Card.Title><a href='/'>Kathryn Ryan</a></Card.Title>
                <Card.Text>
                 <p>CEO, Founder, Atty.</p>
                 <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                 <a href='/'>Learn More</a>
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>

        </Container>
      </div>
    );
}

export default Team