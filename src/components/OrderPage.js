import React, { useEffect, useState } from 'react';
import '/Users/shajinshan/Desktop/react/plant/src/components/HomePagecss/order.css';
import axios from 'axios';
import Swal from 'sweetalert2';

function OrderPage({ userId }) { 

  const idForUser = parseInt(userId); 
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8082/userOrder/readAllOrder/${idForUser}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false); 
      })
      .catch((err) => {
        Swal.fire("Login to View your Orders");
        setIsLoading(false); 
      });
  }, [idForUser]);

  return (
    <div className="order">
      {isLoading ? (
        <p>Loading...</p> 
      ) : data.length > 0 ? (
        data.map((e, index) => {
          // Parse the date and add 5 days
          const orderDate = new Date(e.date);
          const expectedDate = new Date(orderDate);
          expectedDate.setDate(orderDate.getDate() + 5);

          return (
            <div key={index} className="list-group-item list-group-item-action order-detail">
              <img src={e.img} alt={`${e.plantName} image`} />
              <h2>{e.plantName}</h2>
              <h6>Order Placed on {orderDate.toLocaleDateString()}</h6>
              <p>Expected on {expectedDate.toLocaleDateString()}</p>

              <div className='next-page-btn'>
                <img src='images/arrow.png' alt="Next" />
              </div>
            </div>
          );
        })
      ) : (
        <div className="no-orders">
          <h2>No Orders Found</h2>
          <p>Please make a purchase to see it here.</p>
        </div>
      )}
    </div>
  );
}

export default OrderPage;
