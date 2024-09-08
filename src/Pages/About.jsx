import React from 'react'
import test1 from '../../public/BBimages/test1.png';
import kids from '../../public/BBimages/kidreading.jpg'
import jta from '../../public/BBimages/jta.jpeg'
import family from '../../public/BBimages/familyreading.jpg';
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
     <div className="ftco-blocks-cover-1">
      <div className="site-section-cover overlay"
          style={{ 
         backgroundImage: `url(${family})`, 
         backgroundSize: 'cover', 
         backgroundPosition: 'center', 
         backgroundRepeat: 'no-repeat', 
         height: '100vh' 
       }} >
        <div className="container">
          <div className="row align-items-center ">

            <div className="col-md-5 mt-5 pt-5">
              <span className="text-cursive h5 text-red">Welcome To Our Website</span>
              <h1 className="mb-3 font-weight-bold text-teal">About Us</h1>
              <p><Link to="/" className="text-white">Home</Link> <span className="mx-3">/</span> <strong>About</strong></p>
            </div>
            <div className="col-md-6 ml-auto align-self-end">
              </div>
          </div>
        </div>
      </div>
     
    </div>

    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={jta} alt="Image" className="img-fluid"/>
          </div>
          <div className="col-md-5 ml-auto pl-md-5">
            <span className="text-cursive h5 text-red">About Us</span>
            <h3 className="text-black">Backwards Bear and Baby Curl</h3>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et harum, magni sequi nostrum maxime enim.</span><span>Magnam id atque dicta deleniti, ipsam ipsum distinctio. Facilis praesentium voluptatem accusamus, earum veritatis, laudantium.</span></p>

            <p className="mt-5"><a href="#" className="btn btn-warning py-4 btn-custom-1">More About Us</a></p>
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}
