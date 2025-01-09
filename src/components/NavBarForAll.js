import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePagecss/nav.css';
import axios from 'axios';

import Modal from 'react-modal';
import loginkey from '../images/loginkey.png'
import loginicon from '../images/loginicon.png'
import carticon from '../images/cart.png'

Modal.setAppElement('#root');
function NavBarForAll({ counts, loginres ,usermail, handleLogout}) {
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const searchVal = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        if (search) {
            axios.get(`http://localhost:8082/start/product/search?keyword=${search}`)
                .then(response => {
                    setProducts(response.data);
                    setShowDropdown(true);
                })
                .catch(error => alert('Error:', error));
        } else {
            setShowDropdown(false);
        }
    }, [search]);

    const handleBlur = () => {
        // Delay closing the dropdown to allow link clicks
        setTimeout(() => setShowDropdown(false), 200);
    };





    return (
        <div>
            <nav className="navbar bg-primary navbar-expand-lg bg-body-tertiary fixed-top nav-container">
                <div className="container-fluid">
                    <div className='rynco'>
                    <Link to={'/'} className="nav-link btn" style={{ textDecoration: 'none' }}>
                        <a className="navbar-brand" >Rynco Orchids</a>
                    </Link></div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link btn btn-outline-secondary" style={{ textDecoration: 'none' }}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/order'} className="nav-link btn btn-outline-secondary" style={{ textDecoration: 'none' }}>
                                    Order
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/about'} className="nav-link btn btn-outline-secondary" style={{ textDecoration: 'none' }}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products Categories
                                </a>
                                <ul className="dropdown-menu">
                                    <Link to={"/product1"}>
                                        <li><a className="dropdown-item" href="#">Plant</a></li>
                                    </Link>
                                    <Link to={"/product2"}>
                                        <li><a className="dropdown-item" href="#">Orchids</a></li>
                                    </Link>
                                    <Link to={"/product4"}>
                                        <li><a className="dropdown-item" href="#">Trees</a></li>
                                    </Link>
                                    <Link to={"/product3"}>
                                        <li><a className="dropdown-item" href="#">Indoor plant</a></li>
                                    </Link>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex position-relative" role="search">
                          
                            <div className='nav-man-img'>

                                <Link to={loginres ? '/' : '/userlogin'}> 
                                    <img
                                        src={loginres ? {loginkey} : {loginicon}} 
                                        alt="Login"
                                    />
                                </Link>

                            </div>

                            <div className='userName'>
                                <h5>{usermail}</h5>
                            </div>

                            <div className='nav-cart-img'>
                                <Link to={'/cart'}>
                                    <img

                                        src={carticon}
                                        alt="Cart"
                                    />
                                </Link>
                                <h6 className='count'>{counts}</h6>

                            </div>
                            <input
                                onChange={searchVal}
                                value={search}
                                name='search'
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onBlur={handleBlur}
                                onFocus={() => setShowDropdown(true)}
                            />
                            <div>
                                {loginres ?  <button className='btn btn-danger' onClick={handleLogout}>Logout</button>:
                                <div></div>
                                }
                               
                            </div>
                            {showDropdown && products.length > 0 && (
                                <div className="dropdown-menu show search-dropdown position-absolute">
                                    <ul className='unorderlist'>
                                        {products.map(product => (
                                            <li key={product.id} className="dropdown-item btn ">
                                                <Link to={`/productview/${product.id}`} onClick={() => setShowDropdown(false)}>
                                                    {product.productName} - {product.category} - ₹{product.price}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBarForAll;
