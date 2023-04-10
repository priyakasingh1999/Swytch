import React from "react"

const Header = ()=>{
    return(
        <>
       <section className="footers text-center">
    <div className="top-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <a href="" className="footer-logo">
              <img src="img/logo.svg" className="img-fluid" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="middle-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="mb-0 white">
              {" "}
              Swytch My Mobile is a trading name of Switch Experts. Find out
              more about we handle your data in our{" "}
              <a href="" className="fw-bold text-decoration-underline white">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="mb-0 white fs-14">
              © Copyright 2023 | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}
export default Header