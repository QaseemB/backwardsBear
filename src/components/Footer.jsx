import React from 'react'

function Footer() {
  return (
    <>
     <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h2 className="footer-heading mb-3">About Us</h2>
                <p className="mb-5">Going in a different direction from what she studied in college to pursuit life fillment, she became a Children's Author. </p>

                <h2 className="footer-heading mb-4">Newsletter</h2>
                <form action="#" className="d-flex subscribe">
                  <input type="text" className="form-control mr-3" placeholder="Email"/>
                  <input type="submit" value="Send" className="btn btn-primary"/>
                </form>
          </div>
          <div className="col-lg-8 ml-auto">
            <div className="row">
              <div className="col-lg-4 ml-auto">
                <h2 className="footer-heading mb-4">Navigation</h2>
                <ul className="list-unstyled">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>

              
              
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
              <p>
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved <a href="" target="_blank" >QaseemB</a>
            </p>
            </div>
          </div>

        </div>
      </div>
    </footer>

     
    </>
  )
}

export default Footer