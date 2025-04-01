import React,{useEffect,useReducer,useState} from 'react'
import { Container } from 'react-bootstrap'
import { MdDelete } from "react-icons/md";
import Form from 'react-bootstrap/Form';
function Cart() {
  const [cart,setCart]=useState([])
  const[qty,dispatch]=useReducer(reducer,0) 
  function reducer(qty,action)
  {
    switch(action.type)
    {
      case'changecartqty':
      return(cart.filter((c)=>{
        return(
          c.id===action.payload.id?(c.qty=action.payload.qty):c.qty
        )
      }))
      default:
        return qty
    }
  }
  function gettotal()
  {
    let total=0
    cart.map((ct)=>{
      total=total+(ct.qty*ct.price)
    })
    return total
  }
  useEffect(()=>{
    fetch("http://localhost:3000/cart").then((res1)=>{
      res1.json().then((res2)=>{
        console.log(res2)
        setCart(res2)
      })
    })
  },[])
  function removecartitem(id)
  {
    fetch(`http://localhost:3000/cart/${id}`,{
      method:"delete"
    }).then((resp1)=>{
      resp1.json().then((resp2)=>{
        console.log(resp2)
      })
    })
    window.location.reload()
  }
  return (
    <div>
      <Container>
        <table className='table mt-4 mb-4'>
            <thead>
              <tr><th>ID</th><th>PRODUCT</th><th>NAME</th><th>QUANTITY</th><th>PRICE</th><th></th></tr>
            </thead>
            <tbody>
              {
                cart.map((item,index)=>{
                  return (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td><img src={item.images} alt='' height={80} width={80}/></td>
                      <td>{item.name}</td>
                      <td> <Form.Select aria-label="Default select example" value={item.

                      qty}
                      onChange={(e)=>{
                        dispatch({
                          type:"changecartqty",
                          payload:{
                            id:item.id,
                            qty:e.target.value
                          }
                        })
                      }}>
                        {
                          [...Array(item.stock).keys()].map((q)=>{
                            return(
                              <option key={q+1}>{q+1}</option>
                            )
                          })
                        }

                        {/* <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option> */}
                      </Form.Select></td>
                      <td>{item.qty*item.price}</td>
                      <td><MdDelete className='text-danger fs-4' onClick={() =>removecartitem(item.id)}/></td>
                    </tr>
                  )
                })
              }
            </tbody>
            <tfoot>
              <tr><td colSpan={2}>{cart.length} items:</td><td colSpan={2}>Total cost: $
                {gettotal()}</td></tr>
            </tfoot>
        </table>
      </Container>
    </div>
  )
}

export default Cart
