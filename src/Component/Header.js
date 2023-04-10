import React from "react"


const Header = ()=>{
    return(
        <>
        <section className="swytch-header">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <a className="header-logo" href="">
            <img src="img/logo.svg" className="img-fluid" alt="" />
          </a>
        </div>
        <div className="col-md-6">
          <div className="d-flex align-items-center justify-content-end">
            <div className="pe-2">
              <img src="img/white-lock.svg" className="lock" alt="" />
            </div>
            <p className="mb-0 white fs-15 pt-1">
              Safe, Secure &amp; Confidential
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