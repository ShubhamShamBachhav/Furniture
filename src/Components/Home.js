import React from 'react'
import Header from './Header'
import Testimonial from './Testimonial'
import Why from './Why'
import Interior from './Interior'
import { Container } from 'react-bootstrap'
import Craft from './Craft'
import Blogcard from './Blogcard'

function Home() {
  return (
    <div>
        <Header/>
        <Craft/>
        <Why/>
        <Interior/>
        <Testimonial/>
        <Container>
        <div className='d-flex justify-content-between m-auto'>

          <h1>Recent Blog</h1>
          <a href='/' className='text-dark text-decoration-underline'>View All Post</a>
        </div>
        <Blogcard/>
        </Container>
  
    </div>
  )
}

export default Home