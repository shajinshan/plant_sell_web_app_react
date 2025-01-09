import React from 'react'
import './adminmenupage.css'
import { Link } from 'react-router-dom'

function AdminMenuPage() {
    return (
        <div >

            <div className="vh-100 gradient-custom d-flex justify-content-center align-items-center">

            <div class="container text-center">
  <div class="row">

    <div class="col">
     <Link to={'/add'}><button className='btn btn-success'>Add Products</button></Link>
    </div>

    
    <div class="col">
     <Link to={'/adminproductview'}><button className='btn btn-success'>View Products</button></Link>
    </div>

    <div class="col">
    <Link to={'/orderdetailadmin'}><button className='btn btn-success'>View Orders</button></Link> 
    </div>
  </div>
</div>
            </div>

        </div>
    )
}

export default AdminMenuPage