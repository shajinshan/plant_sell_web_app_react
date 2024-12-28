import React, { useEffect, useState } from 'react';
import './css/Addressfill.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import PaymentPage from './PaymentPage';

function OderAdressFill() {

 

  const navigate = useNavigate();

  const { id } = useParams();

  const [plantdata, setPlantdata] = useState(null);

  const [data, setData] = useState({
    name: '',
    phone: '',
    pincode: '',
    mail: '',
    address: '',
    district: '',
    state: '',
    landmark: '',
    alterPhoneNumber: '',
    plantid: '',
    plantName: '',
    price: '',
    category: '',
    img:''
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8082/cartfun/cart/view/${id}`)
      .then((res) => {
        setPlantdata(res.data);
        
        setData((prevData) => ({
          ...prevData,
          plantid: res.data.id,
          plantName: res.data.productName,
          price: res.data.price,
          category: res.data.category,
          img:res.data.img
        }));
      })
      .catch((err) => {
        alert(err);
      });
  }, [id]);

  function inputValues(e) {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
      plantid: plantdata?.id,
      plantName: plantdata?.productName,
      price: plantdata?.price,
      category: plantdata?.category
    }));

   
  }

  function onSaveAndContinue(e) {
    e.preventDefault();
    
  
    // Check if any required field is empty
    const isEmpty = Object.values(data).some((value) => value === '' || value === null);
  
    if (isEmpty) {
      alert("Please fill in all the required fields before proceeding.");
      return;
    }
  
    // If validation passes, proceed with the API call
    axios.post('http://localhost:8082/order/addDetails', data)
      .then((res) => {
        
        navigate(`/payment/${data.plantid}`)
      })
      .catch((err) => {
        alert(err);
      });
  }
  
  return (
    
    <div className="address-container">
      <h2 className="form-title">Enter Delivery Address</h2>


      <form className="address-form" onSubmit={(e) => onSaveAndContinue(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" required name='name' onChange={inputValues}></input>
          <input type="text" placeholder="10-digit mobile number" name='phone' required onChange={inputValues}></input>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Pincode" name='pincode' required onChange={inputValues}></input>
          <input type="text" placeholder="e-mail" name='mail' required onChange={inputValues}></input>
        </div>

        <div className="form-group">
          <textarea id="address" name='address' placeholder="Address (Area and Street)" required onChange={inputValues} ></textarea>
        </div>

        <div className="form-group">
          <input type="text" name='district' placeholder="District" required onChange={inputValues}></input>
          <select name='state' required onChange={inputValues}>
            <option selected>select state</option>
            <option value="Tamil Nadu" >Tamil Nadu</option>
            <option value="Kerala">Kerala</option>
          </select>
        </div>

        <div className="form-group">
          <input type="text" id="landmark" name='landmark' placeholder="Landmark" onChange={inputValues}></input>
          <input type="text" id="alternate-phone" name='alterPhoneNumber' placeholder="Alternate Phone" onChange={inputValues}></input>
        </div>



        <div className="form-actions">
          <button type="submit" className="save-btn">Save and Deliver Here</button>
          <button type="button" className="cancel-btn">Cancel</button>
        </div>
      </form>
      
    </div>
  );
}

export default OderAdressFill;
