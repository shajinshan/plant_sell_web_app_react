import React, { useEffect, useState } from 'react';
import './HomePagecss/newstock.css';
import axios from 'axios';
import { useNavigate } from 'react-router';

function NewStocs() {

  const navigate=useNavigate();

  const [newstack, Setnewstack] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/start/latest')
      .then((res) => {
        Setnewstack(res.data)
      })
      .catch((err) => {
        alert(err)
      })

  },[]);
  function onNavigate(id){
navigate(`/productview/${id}`);
  }
  return (
    <div className='new-stock'>
      <div className="container text-center">
        <div className="row align-items-start">

          {
            newstack.map((e) => {
              return (
                <div className="col-12 col-sm-6 col-md-4 mb-4 caard">
                  <div className="card h-100 ">
                    <img
                    onClick={()=>onNavigate(e.id)}
                      src={e.img}
                      className="card-img-top"
                      alt="product img"></img>
                    <div className="card-body">
                      <h3 className="card-text">{e.productName}</h3>
                    </div>
                  </div>
                </div>
              )
            })
          }



        </div>
      </div>
    </div>
  );
}

export default NewStocs;
