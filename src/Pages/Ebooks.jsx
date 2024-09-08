import React from 'react'
import { Link } from 'react-router-dom'
import family from '../../public/BBimages/familyreading.jpg'
import book1 from '../../public/BBimages/bbbook1.png'
import book2 from '../../public/BBimages/bbbook2.png'
function Ebooks() {
  return (
    <>
       <div className="ftco-blocks-cover-1">
      <div className="site-section-cover overlay"  
      style={{
        backgroundImage: `url(${family})`, 
         backgroundSize: 'cover', 
         backgroundPosition: 'center', 
         backgroundRepeat: 'no-repeat', 
         height: '100vh'}}>
        <div className="container">
          <div className="row align-items-center ">

            <div className="col-md-5 mt-5 pt-5">
              <span className="text-cursive h5 text-red">Ebooks</span>
              <h1 className="mb-3 font-weight-bold text-teal">Our Pricing</h1>
              <p><Link to="/" className="text-white">Home</Link> <span className="mx-3">/</span> <strong>Pricing</strong></p>
            </div>
            
          </div>
        </div>
      </div>
    </div>

    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <span className="text-cursive h5 text-red d-block">Pricing Plan</span>
            <h2 className="text-black">Our Pricing</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quis cupiditate fugit, voluptatibus ullam, non laboriosam alias veniam, ex inventore iure sed?</p>
          </div>
          <div className="col-md-4">
            <img src={book1} alt="family" className="img-fluid"/>
            <div className="pricing teal">
              <h3>Adventures Of Backwards Bear and Baby curl</h3>
              <ul className="ul-check list-unstyled teal">
                <li>Lorem ipsum dolor sit amet</li>  
                <li>Consectetur adipisicing elit</li>
                <li>Nemo quis cupiditate</li>
              </ul>
              <p><a href="#" class="btn btn-teal btn-custom-1 mt-4">Buy Now</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <img src={book2} alt="family" className="img-fluid"/>
            <div className="pricing danger">
              <h3>Backwards bear stands up against Bullying</h3>
              <ul className="ul-check list-unstyled danger">
                <li>Lorem ipsum dolor sit amet</li>  
                <li>Consectetur adipisicing elit</li>
                <li>Nemo quis cupiditate</li>
              </ul>
              <p><a href="#" className="btn btn-danger btn-custom-1 mt-4">Buy Now</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Ebooks