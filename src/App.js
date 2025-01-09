import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomeForAll from './components/allplants/HomeForAll';
import AboutPage from './components/AboutPage';
import OrderPage from './components/OrderPage';
import AddCartPage from './components/AddCartPage';
import NavBarForAll from './components/NavBarForAll';
import FilterPlants from './components/FilterPlants';
import ProductView from './components/ProductView'
import { useEffect, useState } from 'react';
import AddProduct from './components/AdminPage/AddProduct';
import LoginPage from './components/AdminPage/LoginPage';
import AdminMenuPage from './components/AdminPage/AdminMenuPage';
import AdminViewProduct from './components/AdminPage/Product/AdminViewProduct';
import OrderCheckOut from './components/OrderControl/OrderCheckOut';
import OderAdressFill from './components/OrderControl/OderAdressFill';
import PaymentPage from './components/OrderControl/PaymentPage';
import OrderDetails from './components/AdminPage/OrderDetails';
import Register from './components/UserLoginSign/Register';
import Login from './components/UserLoginSign/Login';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [login, setLogin] = useState(() => localStorage.getItem('userId') !== null);
  const [loginId, setLoginId] = useState(localStorage.getItem('userId'));
  const [userGmail, setUserGmail] = useState(localStorage.getItem('userGmail'));

  // Function to update the cart count
  const updateCartCount = (counts) => {
    setCartCount(counts);
  };

  const updateLoginStatus = (loginRes) => {
    setLogin(loginRes);
  };

  const setUserId = (userId) => {
    localStorage.setItem('userId', userId);
    setLoginId(userId);
  };

  const setUserName = (userGmail) => {
    localStorage.setItem('userGmail', userGmail);
    setUserGmail(userGmail);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userGmail');
    setLogin(false);
    setLoginId(null);
    setUserGmail(null);
  };

  return (
    <BrowserRouter>
      <NavBarForAll counts={cartCount} loginres={login} userGmail={userGmail} handleLogout={handleLogout} /> 

      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/showmore' element={<HomeForAll />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/order' element={<OrderPage userId={loginId} />} />
          <Route path='/cart' element={<AddCartPage cartCount={updateCartCount} userId={loginId} />} />
          <Route path='/product1' element={<HomeForAll />} />
          <Route path='/product2' element={<FilterPlants value="Orchids" />} />
          <Route path='/product3' element={<FilterPlants value="indoor" />} />
          <Route path='/product4' element={<FilterPlants value="tree" />} />
          <Route path="/productview/:id" element={<ProductView userId={loginId} />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/adminmenu' element={<AdminMenuPage />} />
          <Route path='adminproductview' element={<AdminViewProduct />} />
          <Route path='/ordercheckout/:id' element={<OrderCheckOut />} />
          <Route path='/orderadressfill/:id' element={<OderAdressFill />} />
          <Route path='/payment/:plantid' element={<PaymentPage userId={loginId} />} />
          <Route path='/orderdetailadmin' element={<OrderDetails />} />
          <Route path='/register' element={<Register />} />
          <Route path='/userlogin' element={<Login updateLoginStatus={updateLoginStatus} setUserId={setUserId} setUserName={setUserName} />} />
        </Routes>             
      </div>
    </BrowserRouter>
  );
}

export default App;
