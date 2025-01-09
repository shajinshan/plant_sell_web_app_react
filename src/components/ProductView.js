import React, { useEffect, useState } from 'react'
import NavBarForAll from './NavBarForAll'
import './HomePagecss/productview.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';

function ProductView(userId) {

  let idForUser=parseInt(userId.userId);

  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8082/start/product/${id}`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        alert(err)
      });
  }, [id]); 

  function addToCart() {
    const cartData = {
      productName: data.productName,
      category: data.category,
      img: data.img,
      description: data.description,
      price: data.price,
      productId:data.id,
    };

    axios.post(`http://localhost:8082/cartfun/cart/addCart/${idForUser}`,cartData)
      .then((res) => {
        navigate('/cart');
        
      })
      .catch((err) => {
        Swal.fire('Login to Add to Cart');
      });
  }

  
  return (
    <div>

      {data ? (
        <div className='view-container'>
          
          <div className='img-container'>
            <img src={data.img} alt={data.productName} />
          </div>

          <h1>{data.productName}</h1>
          <h5>Rs:{data.price}</h5>

          <div className='description-box-plant'>
            <p>{data.description}</p>
          </div>
          <div>
            <button type="button" className="btn btn-success" onClick={addToCart}>Add to cart</button>
          </div>
        </div>
      ) : (
        <h2>Nothing</h2>
      )}
    </div>
  )
}

export default ProductView;
