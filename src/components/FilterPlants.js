import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

function FilterPlants({ value }) {

    const navigate = useNavigate();
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

    function productShow(id) {

        navigate(`/productview/${id}`)

    }

    const filterdData = data.filter((e) => e.category === value);

    return (
        <div>

            <div className="container-fluid">
                <div className="container text-center">
                    <div className="row">

                        {
                            filterdData.length > 0 ?
                                filterdData.map((e) => {

                                    return (
                                        <div className="col-12 col-sm-6 col-md-4 mb-4" >
                                            <div className="card h-100 col" >
                                                <img
                                                    onClick={() => productShow(e.id)}
                                                    src={e.img}
                                                    className="card-img-top"
                                                    alt="Plant 1"></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">{e.productName}</h5>
                                                    <button type="button" className="btn btn-outline-dark" onClick={() => productShow(e.id)}>View</button>
                                                </div>
                                            </div>
                                        </div>

                                    )


                                }
                                ) : (
                                    <center>
                                        <h1>No plants match the category {value}</h1>
                                    </center>
                                )


                        }


                    </div>

                </div>
            </div>
        </div>
    )
}

export default FilterPlants