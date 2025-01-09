import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Player } from '@lottiefiles/react-lottie-player'; // Corrected import for Lottie Player
import './HomePagecss/addcart.css'; // Make sure the path is correct
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function AddCartPage({cartCount ,userId}) {
  
  let idForUser=parseInt(userId,10);
  const [data, setData] = useState([]);


  useEffect(() => {
    // Fetch cart data on component mount
    axios
      .get(`http://localhost:8082/cartfun/cart/readAllByUserId/${idForUser}`)
      .then((res) => {
        setData(res.data);
        cartCount(res.data.length)
      })
      .catch((err) => {
       Swal.fire('Login to View your Cart')
      });
  }, [idForUser, cartCount]);

  function removeCart(id) {
    axios
      .delete(`http://localhost:8082/cartfun/cart/delete/${id}`)
      .then((response) => {
        
       
        // Remove the item from state without reloading the page
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
        cartCount(updatedData.length);
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
      });
  }

  return (
    <div>
      <center>
        {data.length > 0 ? (
          data.map((e) => {
            
            return (
              <div key={e.id} className='cart-box'>
                <img src={e.img} alt={e.productName} />
                <h2>{e.productName}</h2>

                <div className='cart-description'>
                  <p className='des'>{e.description}</p>
                </div>

               <Link to={`/ordercheckout/${e.id}`}><button type="button" className="btn btn-success" >
                  Proceed Order
                </button></Link> 
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeCart(e.id)}
                >
                  Remove
                </button>
                <h4>Price: Rs {e.price}</h4>
              </div>
            );
          })
        ) : (
          <div className="nocart">
    <h3>No items in the cart</h3>
    <Link to="/showmore"><button className="btn btn-primary">Go to Products</button></Link>
    <Player
        src="https://lottie.host/db663229-cfcb-48f0-bcc1-476e559771e8/Q7s5k5Myka.json"
        background="transparent"
        speed="1"
        style={{ width: '300px', height: '300px' }}
        loop
        autoplay
    />
</div>

        )}
      </center>
    </div>
  );
}

export default AddCartPage;
