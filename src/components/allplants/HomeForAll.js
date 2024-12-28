import React, { useEffect, useState } from 'react'
import NavBarForAll from '../NavBarForAll'
import '/Users/shajinshan/Desktop/react/plant/src/components/allplants/Homeforall.css';  // Assuming the path to your CSS is correct
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HomeForAll() {

  const [data, setData] = useState([]);
  useEffect(() => {

    axios.get('http://localhost:8082/start/readAll')
      .then((res) => {
        console.log(res)
        setData(res.data);
      })
      .catch((error) => {
        alert(error)
      })
  }, []);

  const navigate=useNavigate();

  function productShow(id){
    
    navigate(`/productview/${id}`)

  }
  return (
    <div>

    
      <div className="container-fluid">
        <div className="container text-center">
          <div className="row">

            {
              data.map((e) => {
                return (
                  <div className="col-12 col-sm-6 col-md-4 mb-4" >
                    <div className="card h-100 col" >
                      <img
                      onClick={ ()=> productShow(e.id)}
                        src={e.img}
                        className="card-img-top"
                        alt="Plant 1"></img>
                      <div className="card-body">
                        <h5 className="card-title">{e.productName}</h5>
                        <button type="button" className="btn btn-outline-success" onClick={ ()=> productShow(e.id)}>View</button>
                      </div>
                    </div>
                  </div>

                )
              }
              )
              }




          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeForAll;
