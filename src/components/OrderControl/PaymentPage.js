import React, { useEffect, useState } from 'react';
import './css/Paymentpage.css'; // Use relative paths
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import orderconfirmicon from './orderconfirm.json';
import Lottie from 'lottie-react';
import './css/OrderConfimAnimation.css';

function PaymentPage({ userId }) {
  const idForUser = parseInt(userId);
  const [orderData, setOrderData] = useState({ plantName: '' });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mailmsg, setMailmsg] = useState({
    receipt: '',
    orderId: '',
    name: '',
    address: '',
    phone: '',
    state: '',
    plantname: '',
    price: ''
  });

  const { plantid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`http://localhost:8082/order/view/${plantid}`);
        setData(res.data);
        setMailmsg({
          receipt: res.data.mail,
          orderId: res.data.id,
          name: res.data.name,
          address: res.data.address,
          phone: res.data.phone,
          state: res.data.state,
          plantname: res.data.plantName,
          price: res.data.price
        });
      } catch (error) {
        alert(`Failed to fetch order details: ${error.message}`);
      }
    }

    fetchData();
  }, [plantid]);

  async function onOrderConfirm(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`http://localhost:8082/userOrder/addOrder/${idForUser}`, { 
        plantName: data.plantName, img: data.img 
      });
      await axios.post('http://localhost:8082/ordermail/sendmail', mailmsg);
      await axios.delete(`http://localhost:8082/cartfun/cart/delete/${data.plantid}`);
      
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      alert('Error processing order: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {loading ? (
        <div className="lotie-container">
          <Lottie loop={false} animationData={orderconfirmicon} />
          <h2 className="animatedText">Order placed successfully!</h2>
        </div>
      ) : (
        <div className="payment-container">
          <h2 className="payment-title">Payment Options</h2>
          {data && (
            <div className="order-details">
              <h3>Order Summary</h3>
              <p>Order ID: {data.id}</p>
              <p>Total Amount: ${data.price}</p>
            </div>
          )}
          <form className="payment-form" onSubmit={onOrderConfirm}>
            <div className="form-group">
              <input type="radio" id="upi" name="payment-method" value="upi" />
              <label htmlFor="upi">UPI <span>Pay by any UPI app</span></label>
            </div>
            <div className="form-group cod-group">
              <input type="radio" id="cod" name="payment-method" value="cod" defaultChecked />
              <label htmlFor="cod">Cash on Delivery</label>
            </div>
            <button type="submit" className="confirm-btn">Confirm Order</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PaymentPage;
