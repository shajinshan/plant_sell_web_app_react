import React, { useState } from 'react'
import '/Users/shajinshan/Desktop/react/plant/src/components/AdminPage/addProduct.css'
import axios from 'axios';

function AddProduct() {


  const [data,setData]=useState([{productName:'',category:'',price:'',description:'',img:'',date:''}]);

  function onProductAdd(){
    if (!data.productName || !data.category || !data.price || !data.description || !data.img) {
      alert('Please fill all fields');
      return;
    }

    axios.post('http://localhost:8082/start/add',data)
    .then((res)=>{
      alert('added')
    })
    .catch((err)=>{
      alert(err)
    })

  }
  function onValueAdd(e){
    setData({...data,[e.target.name]:e.target.value});
  }
  return (
    <div>

      
        <div className='admin-form border-info shadow-lg' >
            <input className='form-control' placeholder='Plant Name' name='productName' onChange={onValueAdd}></input>
            <select className='form-control' name='category' onChange={onValueAdd}>
            <option >Select Plant category</option>
            <option value={'indoor'}>indoor</option>
            <option value={'Trees'}>Trees</option>
            <option value={'Orchids'}> Orchids</option>
            </select>
            
            <input className='form-control' placeholder='Price' name='price' onChange={onValueAdd}></input>
            <textarea className='form-control'id='exampleFormControlTextarea1' placeholder='Description' name='description' onChange={onValueAdd}></textarea>
            <input className='form-control' placeholder='Img Link' name='img' onChange={onValueAdd}></input>

            <input className='form-control' placeholder='Img Link' name='date' type='date' onChange={onValueAdd}></input>


            <button className='btn btn-info w-50 shadow-sm' onClick={onProductAdd}>Add Product</button>
        </div>
    </div>
  )
}

export default AddProduct