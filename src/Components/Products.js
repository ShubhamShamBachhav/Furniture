import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
function Products() {
    const [chairs,setChairs]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
     dispfurn() 
    getcart()
    },[])
    function dispfurn()
    {
      fetch("http://localhost:3000/chairs").then((res1)=>{
        res1.json().then((res2)=>{
          console.log(res2)
          setChairs(res2)
        })
      })
    }
    function getcart()
    {
      fetch("http://localhost:3000/cart").then((res1)=>{
        res1.json().then((res2)=>{
          console.log(res2)
          setCart(res2)
        })
      })
    }
    function addtocart(item)
    {
      
      if(cart.some((c)=>c.id===item.id))
      {
        alert(item.name+" Already added in the cart")
      }
      else
    {
      fetch("http://localhost:3000/cart",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(item)
      }).then((res1)=>{
        res1.json().then((res2)=>{
          console.log(res2)
          getcart()
          
        })
      })
    }
    //window.location.reload()    //==>this command is use for refresh/reload the page
    }
  return (
    <div>
        <Container>
        <div className='row row-cols-1 row-cols-md-4 mt-4 mb-4 g-4 pb-5 bg-body-tertiary'>
            {
                chairs.map((item,index)=>{
                    return (
                        <div className='col' key={index}>
<Card style={{ width: '16rem' }} className='border-0'>
      <Card.Img variant="top" src={item.images} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          <h4>$ {item.price}</h4>
        </Card.Text>
        <Button variant="dark" className='btn1 rounded-circle w-25 fs-3' onClick={()=>addtocart(item)}>+</Button>
      </Card.Body>
    </Card>
                        </div>
                    )
                })
            }
        </div>
        </Container>
    </div>
  )
}

export default Products