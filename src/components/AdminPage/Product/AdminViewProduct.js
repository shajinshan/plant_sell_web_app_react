import React, { useEffect, useState } from 'react'
import './adminViewPage.css'
import axios from 'axios';
import { useNavigate } from 'react-router';

function AdminViewProduct() {

    const navigate=useNavigate();

    const [data, setData] = useState([]);
    useEffect(() => {

        axios.get('http://localhost:8082/start/readAll')
            .then((res) => {

                setData(res.data);
            })
            .catch((error) => {
                alert(error)
            })
    }, []);

    function onViews(id){
navigate(`/productview/${id}`)

    };

    function onDelete(id) {
        axios
          .delete(`http://localhost:8082/start/admin/delete/${id}`)
          .then((response) => {
            
           
            
            const updatedData = data.filter((item) => item.id !== id);
            setData(updatedData);
           
          })
          .catch((error) => {
            console.error('Error deleting item:', error);
          });
      }
    return (
        <div>
            <div className="container text-center viewcontainer">
                <div className="row">
                   


                        {
                            data.map((e) => {
                                return (
                                    <div className="col-12 col-sm-6 col-md-4 mb-4" >
                                    <div className="card h-100 col" >
                                        <img
                                            onClick={()=> onViews(e.id)}
                                            src={e.img}
                                            className="card-img-top"
                                            alt="Plant 1"></img>
                                        <div className="card-body">
                                            <h5 className="card-title">{e.productName}</h5>
                                            <div className='bttnforview'>
                                            <button type="button" className="btn btn-outline-success" >Update</button>
                                            <button type="button" className="btn btn-outline-danger" onClick={()=> onDelete(e.id)}>Delete</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                )
                            })
                        }

                 

                </div>
            </div>
        </div>
    )
}

export default AdminViewProduct