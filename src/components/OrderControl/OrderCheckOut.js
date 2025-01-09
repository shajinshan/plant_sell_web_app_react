import React, { useState ,useEffect} from 'react'
import './css/oderCheckout.css'
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';

function OrderCheckOut() {
    const navigate =useNavigate();
    const [data,setData]=useState({});
    const {id}=useParams();
    // const [coupon, setCoupon] = useState(false);
    // const [inpval, setInpval] = useState({coupons:''});

    // let couponKey = "newuser";

    // let total =data.price;

//     function onReadval(e){
//         setInpval({[e.target.name]:e.target.value})
       
//     }

//     function onCheckCoupon(){
//       if(inpval.coupons === couponKey){
// setCoupon(true);

//       }
//       else{
//         setCoupon(false);
//         alert("invalid Code");
//       }
//     };

    useEffect(() => {
        axios.get(`http://localhost:8082/cartfun/cart/view/${id}`)
          .then((res) => {
            setData(res.data)
          })
          .catch((err) => {
            alert(err)
          });
      }, [id]);

      function onBuyNow(id){
        navigate(`/orderadressfill/${id}`);
      }
    return (
        <div>
            {data ? (
                 <div className="checkout-container">
                 <div className="product-details">
                     <div className="product-image">
                         <img src={data.img} alt="Product Image"></img>
                     </div>
                     <div className="product-info">
                         <h2 className="product-title">{data.productName}</h2>
                         <p className="product-category">{data.category}</p>
                     </div>
                 </div>
 
                 <div className="pricing-details">
                     <div className="price">
                         <span>Price:</span> <span className="amount">₹{data.price}</span>
                     </div>
                     <div className="discount">
                         <span>Discount:</span> <span class="amount"></span>
                     </div>
                     {/* <div className="coupon-code">
                         <label for="coupon">Coupon Code:</label>
                         <input type="text" id="coupon" name='coupons' onChange={onReadval} placeholder="Enter Coupon Code"></input>
                         <button className="validate-btn" onClick={onCheckCoupon}>Validate</button>
                     </div> */}
                     <div className="total">
                         <span>Total: </span> <span className="amount total-amount">₹{data.price}</span>
                     </div>
                 </div>
 
               <button className="buy-now-btn" onClick={()=> onBuyNow(data.id)}>Buy Now</button>
             </div>
            ):(
                <div>
                    <h2>Not found</h2>
                    </div>
            )}
           
        </div>
    )
}

export default OrderCheckOut