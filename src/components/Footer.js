import React from 'react';
import '/Users/shajinshan/Desktop/react/plant/src/components/HomePagecss/footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer-container'>
            <div className="container-fluid">
                <div className="container text-center text-md-left">
                    <div className="row">
                        {/* Contact Us Section */}
                        <div className="col-md-4 mb-4">
                            <h5 style={{ fontWeight: 'bold', marginBottom: '20px' }}>CONTACT US</h5>
                            <p>AP III/93, Kurinjilakodu, Nedumangadu Thaluk,<br />
                                Trivandrum District-695 543<br />
                                Kerala State, India.
                            </p>
                            <p><i className="fa text-body-secondary fa-map-marker"></i> Trivandrum</p>
                            <p><i className="fa fa-phone"></i> +91 9656455577</p>
                            <p><i className="fa fa-envelope"></i> sales@ryncoorchids.com</p>
                        </div>

                        {/* My Account Section */}
                        <div className="col-md-4 mb-4 aaa">
                            <h5 style={{ fontWeight: 'bold', marginBottom: '20px' }}>MY ACCOUNT</h5>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li><a  className="footer-link  btn ">Contact Us</a></li>
                                <li><a  className="footer-link  btn ">How to Grow</a></li>
                                <li><a  className="footer-link  btn ">Brochure</a></li>
                                <li><a className="footer-link   btn">Privacy Policy</a></li>
                               <Link to={'/login'}><li><a href="#" className="footer-link btn btn-danger ">My Login</a></li></Link> 
                            </ul>
                        </div>

                        {/* Follow Us and Payment Section */}
                        <div className="col-md-4 mb-4">
                            <h5 style={{ fontWeight: 'bold', marginBottom: '20px' }}>FOLLOW US</h5>
                            <div className="social-icons">
                                <a href="#" className="social-icon"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="social-icon"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="social-icon"><i className="fa fa-google-plus"></i></a>
                                <a href="#" className="social-icon"><i className="fa fa-instagram"></i></a>
                                <a href="#" className="social-icon"><i className="fa fa-youtube"></i></a>
                            </div>
                            <h5 style={{ fontWeight: 'bold', marginTop: '30px' }}>PAYMENT</h5>
                            <div className="payment-icons">
                                <img src="https://cdn-icons-png.flaticon.com/128/174/174861.png" alt="Paypal" className="payment-icon" />
                                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968224.png" alt="MasterCard" className="payment-icon" />
                                <img src="https://cdn-icons-png.flaticon.com/128/15397/15397907.png" alt="Amex" className="payment-icon" />
                                
                                <img src="https://cdn.iconscout.com/icon/free/png-512/free-upi-logo-icon-download-in-svg-png-gif-file-formats--unified-payments-interface-payment-money-transfer-logos-icons-1747946.png?f=webp&w=512" alt="DHL" className="payment-icon" />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-12">
                            <hr style={{ backgroundColor: '#666', height: '1px', border: 'none' }} />
                            <p>&copy; 2024 Rynco Orchids. All Rights Reserved.</p>
                            <p>Developed by Shajin</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
