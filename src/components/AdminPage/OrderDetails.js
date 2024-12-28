import React, { useEffect, useState } from 'react'
import '/Users/shajinshan/Desktop/react/plant/src/components/AdminPage/Orderdetail.css'
import axios from 'axios';

function OrderDetails() {

  const [data,setData]=useState([]);

  useEffect(()=>{

    axios.get('http://localhost:8082/order/showallorderdetail')
    .then((res)=>{
      setData(res.data);
    })
    .catch((err)=>{
      alert(err)
    })
  },[]);

  function onDeletebyId(id){
    axios.delete(`http://localhost:8082/order/delete/${id}`)
    .then((res)=>{
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
    })
    .catch((err)=>{
      alert(err)
    })
  }
  return (
    <div >
      <div className='ordertab '>
      <table class="table table-primary table-bordered">
  <thead>
    <tr>
      <th scope="col">Order Id</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">E-mail</th>
      <th scope="col">Address</th>
      <th scope="col">District</th>
      <th scope="col">State</th>
      <th scope="col">Landmark</th>
      <th scope="col">Pincode</th>
      <th scope="col">alter phone No</th>
      <th scope="col">Plant Id</th>
      <th scope="col">Plant Name</th>
      <th scope="col">Category</th>
      <th scope="col">Price</th>
      <th scope="col">button</th>
    </tr>
  </thead>
  {
    data.map((e)=>{
      return(
        <tbody className='table-info'>
        <tr>
          <th scope="row">{e.id}</th>
          <td>{e.name}</td>
          <td>{e.phone}</td>
          <td>{e.mail}</td>
          <td>{e.address}</td>
          <td>{e.district}</td>
          <td>{e.state}</td>
          <td>{e.landmark}</td>
          <td>{e.pincode}</td>
          <td>{e.alterPhoneNumber}</td>
          <td>{e.plantid}</td>
          <td>{e.plantName}</td>
          <td>{e.category}</td>
          <td>₹{e.price}</td>
          <td ><button className='btn btn-danger' onClick={()=>onDeletebyId(e.id)}>Delete</button></td>
        </tr>
      </tbody>
      )
    })
  }
 
</table>
</div>
    </div>
  )
}

export default OrderDetails