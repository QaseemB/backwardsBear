import React from 'react'
import family from '../../public/BBimages/familyreading.jpg';
import { Link } from 'react-router-dom'
function ContactUs() {
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
              <span className="text-cursive h5 text-red">Contact</span>
              <h1 className="mb-3 font-weight-bold text-teal">Get in Touch</h1>
              <p><Link to="/" className="text-white">Home</Link> <span className="mx-3">/</span> <strong>contact</strong></p>
            </div>
            <div className="col-md-6 ml-auto align-self-end">
              </div>
          </div>
        </div>
      </div>
      </div>


       <div className="site-section bg-light" id="contact-section">
      <div className="container">
        <div className="row justify-content-center text-center">
        <div className="col-7 text-center mb-5">
          <h2>Get In Touch Using The Contact Form</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum voluptates sed!</p>
        </div>
      </div>
        <div className="row">
          <div className="col-lg-8 mb-5" >
            <form action="#" method="post">
              <div className="form-group row">
                <div className="col-md-6 mb-4 mb-lg-0">
                  <input type="text" className="form-control" placeholder="First name"/>
                </div>
                <div className="col-md-6">
                  <input type="text" class="form-control" placeholder="First name"/>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <input type="text" className="form-control" placeholder="Email address"/>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <textarea name="" id="" className="form-control" placeholder="Write your message." cols="30" rows="10"></textarea>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-6 mr-auto">
                  <input type="submit" className="btn btn-block btn-primary text-white py-3 px-5" value="Send Message"/>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 ml-auto">
            <div className="bg-white p-3 p-md-5">
              <h3 className="text-black mb-4">Contact Info</h3>
              <ul className="list-unstyled footer-link">
                <li className="d-block mb-3">
                  <span className="d-block text-black">Address:</span>
                  <span>34 Street Name, City Name Here, United States</span></li>
                <li className="d-block mb-3"><span className="d-block text-black">Phone:</span><span>+1 242 4942 290</span></li>
                <li className="d-block mb-3"><span className="d-block text-black">Email:</span><span>info@yourdomain.com</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default ContactUs