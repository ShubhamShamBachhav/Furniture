import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Testimonial() {
  return (
   <div className='text-center '>
   <h1>Testimonial</h1>
   <Carousel>
      <Carousel.Item >  
          <p className='fs-5 p-4 w-75 d-block mx-auto  '>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."</p>
          <img src='.\images\person_1.jpg' alt='1' className='img-fluid rounded-circle' height={80} width={80} />
          <h5>Shubham Bachhav</h5>
          <p className='mb-5'>CEO, Founder, OWN Empire</p>
      </Carousel.Item>
      <Carousel.Item>
      <p className='fs-5 p-4 w-75 d-block mx-auto  '>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."</p>
          <img src='.\images\person_1.jpg' alt='2' className='img-fluid rounded-circle' height={80} width={80} />
          <h5>Shubham Bachhav</h5>
          <p className='mb-5'>CEO, Founder, OWN Empire</p>
      </Carousel.Item>
      <Carousel.Item>
      <p className='fs-5 p-4 w-75 d-block mx-auto  '>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."</p>
          <img src='.\images\person_3.jpg' alt='3' className='img-fluid rounded-circle' height={80} width={80} />
          <h5>Shubham Bachhav</h5>
          <p className='mb-5'>CEO, Founder, OWN Empire</p>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Testimonial