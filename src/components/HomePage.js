import React, { useState } from 'react';
import './HomePagecss/home.css'
import NewStocs from './NewStocs';
import Footer from './Footer';
import HomeForAll from './allplants/HomeForAll';

function HomePage() {

  const [more,setMore]=useState(false);

  function showMore(){
    setMore(true)
  }
  function showLess(){
    setMore(false)
  }

  
  return (
    <div>
      {/* main div */}

    

      {/* cursol start */}
      <div className='cursol-container' >

        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://plus.unsplash.com/premium_photo-1667516411046-f0ee053f7d58?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
              <img src="https://plus.unsplash.com/premium_photo-1675293872218-34f853669263?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
              <img src="https://plus.unsplash.com/premium_photo-1675635167686-f5694cd793f3?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."></img>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* cursol end */}
      </div>
      <center>

      

        <div>
          <h2 ><span></span></h2>
        </div>
      </center>

      <div className='new-stockss'>
        <NewStocs />
      </div>


      <center>

        <div className='showmore'>

        <button type="button" class="btn btn-outline-info" onClick={showMore}>Show more...</button>

        {/* <Link to={'/showmore'} style={{ textDecoration: 'none' }}>
        <button type="button" class="btn btn-outline-info">Show more...</button>
                  </Link> */}

          
        </div>
      </center>
      {
        more ?(
          <center>

          <div className='showless'>
          <HomeForAll/>


          <button type="button" class="btn btn-outline-danger" onClick={showLess}>Show less</button>

          </div>
          </center>
        ):(
          <h2></h2>
        )
      }
      <div className='footerz'>
<Footer/>
</div>


      {/* main div */}
    </div>
  );
}

export default HomePage;
