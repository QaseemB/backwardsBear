import React from "react";
import { Link } from "react-router-dom";
import backwardBearImg from '../../public/BBimages/backwardbearimg.jpg';
import jta from  '../../public/BBimages/jta.jpeg';
import '../../css/owl.carousel.min.css'
import '../../css/style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../components/Carousel";
import bbbook1 from '../../public/BBimages/bbbook1.png'


function HomePage() {
  return (
    <>
         <div className="ftco-blocks-cover-1 bg-teal ">
      <div className="site-section-cover overlay">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md-5 mt-5 pt-5">
              <span className="text-cursive h5 text-red">
                Backwards Bear and Baby Curl HomePage
              </span>
              <h1 className="mb-3 font-weight-bold text-teal">
                Bring Fun Life To Your Kids
              </h1>
              <p>Amazing Adventures</p>
              <p className="mt-5">
                <Link to="/ebooks" className="btn btn-primary py-4 btn-custom-1">
                  E-books
                </Link>
              </p>
            </div>
            <div className="col-md-6 ml-auto align-self-end">
              <img
                src={bbbook1}
                width = '80%'
                height="auto"
                alt="backwards bear"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

     <div className="site-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="block-2 red">
              <span className="wrap-icon">
                <span className="icon-home"></span>
              </span>
              <h2>backwards</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt, mollitia, hic enim id culpa.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="block-2 yellow">
              <span className="wrap-icon">
                <span className="icon-person"></span>
              </span>
              <h2>Baby Curl</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt, mollitia, hic enim id culpa.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="block-2 teal">
              <span className="wrap-icon">
                <span className="icon-cog"></span>
              </span>
              <h2>Teddy Bear Island</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt, mollitia, hic enim id culpa.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-5 mb-md-0">
            <img src={jta} alt="Image" className="img-fluid"/>
          </div>
          <div className="col-md-5 ml-auto pl-md-5">
            <span className="text-cursive h5 text-red">About Us</span>
            <h3 className="text-black">Bring Fun Life To Your Kids</h3>
            <p className="text-black"><span>A Mother's Pen was inspired by her husband to write children stories because of her witty sense of humor and creative mind.</span><span>Magnam id atque dicta deleniti, ipsam ipsum distinctio. Facilis praesentium voluptatem accusamus, earum veritatis, laudantium.</span></p>

            <p className="mt-5"><Link to="/about" className="btn btn-warning py-4 btn-custom-1">More About Us</Link></p>
          </div>
        </div>
      </div>
    </div>


    <div className="site-section bg-white">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <span className=" h5 text-red d-block">Reviews</span>
            <h2 className="text-black">What Readers are Saying the books</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 text-black ">
            <div className="testimonial-3-wrap">
              

              {/* <div className="owl-carousel nonloop-block-13">
                <div className="testimonial-3 d-flex">
                  <div className="vcard-wrap mr-5">
                    <img src="images/person_1.jpg" alt="Image" className="vcard img-fluid"/>
                  </div> */}
                  {/* <div className="text">
                    <h3>Jeff Woodland</h3>
                    <p className="position">Partner</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum libero rem maxime magnam. Similique esse ab earum, autem consectetur.</p>
                  </div>
                </div>

                <div className="testimonial-3 d-flex">
                  <div className="vcard-wrap mr-5">
                    <img src="images/person_3.jpg" alt="Image" className="vcard img-fluid"/>
                  </div>
                  <div className="text">
                    <h3>Jeff Woodland</h3>
                    <p className="position">Partner</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum libero rem maxime magnam. Similique esse ab earum, autem consectetur.</p>
                  </div>
                </div>

                <div className="testimonial-3 d-flex">
                  <div className="vcard-wrap mr-5">
                    <img src="images/person_2.jpg" alt="Image" className="vcard img-fluid"/>
                  </div>
                  <div className="text">
                    <h3>Jeff Woodland</h3>
                    <p className="position">Partner</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum libero rem maxime magnam. Similique esse ab earum, autem consectetur.</p>
                  </div> */}
                  <Carousel></Carousel>
                </div>
              </div>
            </div>
            </div>
            </div>
            {/* </div>
            </div> */}
    </>
   
    
    
  );
}

export default HomePage;
