import { Link } from "react-router-dom";
import SmoothProgressBar from "./SmoothProgressBar";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const Step3 = ()=>{
  return(
    <>
    <motion.div  className="ppp" >
    <div>
  <Header/>  
  </div>
    <section className="deal-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <h2 className="blue swytch-title text-center">
            Find <strong>A Better Deal</strong> On Mobile Phone Contracts
          </h2>
          <div className="my-3">
          <SmoothProgressBar value="90"  num="90"/>
          </div>
          {/* <div className="progress step-bar-area">
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Basic example"
              style={{ width: "90%" }}
              aria-valuenow={90}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div> */}
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="deal-box">
            <h3 className="dark-blue text-center fw-bold mb-5">
              Your contact details
            </h3>
            <div className="row justify-content-center contact-details">
              <div className="col-md-5">
                <div className="mb-4">
                  <p className="fw-bold form-label text-center">First Name</p>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="mb-4">
                  <p className="fw-bold form-label text-center">Last Name</p>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="mb-4">
                  <p className="fw-bold form-label text-center">Postcode</p>
                  <input
                    type="text"
                    placeholder="Postcode"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="mb-4">
                  <p className="fw-bold form-label text-center">Telephone</p>
                  <input
                    type="text"
                    placeholder="Telephone"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-10">
                <div className="mb-4">
                  <p className="fw-bold form-label text-center">
                    Email address
                  </p>
                  <input
                    type="text"
                    placeholder="Email address"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-10 mb-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label fs-13 dark-blue"
                    htmlFor="flexCheckDefault"
                  >
                    By ticking the box, you confirm that you are over 18 years
                    of age, responsible for paying the bills and agree to
                    receive direct marketing by telephone and SMS from our
                    switching partners at Switch Experts and agree to our
                    Privacy Policy.
                  </label>
                </div>
              </div>
              <div className="col-md-10">
                <div className="text-center mb-5">
                  <Link to="/Thankyou" className="green-btn">
                  Continue
                  </Link>
                  {/* <a href="" className="green-btn">
                    Continue
                  </a> */}
                </div>
                <p className="mb-0 fs-13 gray text-center mb-5">
                  Your information is safe &amp; secure on this website. By
                  clicking ‘Continue’, you are consenting to be contacted by the
                  service provider above via Telephone, Email and SMS. We will
                  only share the details you provided with them and no one else.
                  By clicking ‘Continue’ you agree to our{" "}
                  <a href="" className="text-decoration-underline gray">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center lets-shine">
              <div className="d-flex align-items-center justify-content-end">
                <div className="pe-2">
                  <img src="img/gray-lock.svg" className="lock" alt="" />
                </div>
                <p className="mb-0 gray fs-14 pt-1">
                  Safe, Secure &amp; Confidential
                </p>
              </div>
              <div className="gray ps-4 pe-4">|</div>
              <div className="pt-1 pe-4">
                <a className=" fs-14 gray text-decoration-underline" href="">
                  Privacy Policy
                </a>
              </div>
              <div>
                <img src="img/lets.svg" alt="" className="lets-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* deal section end */}
  <section className="or-call bottom-space">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p className="mb-2 blue fs-20 text-center">Or call us now direct:</p>
          <div>
            <a href="" className="call-with-icon">
              <img src="img/call-icon.svg" className="call-icon" alt="" />
              <span>03333 441 584</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div>
  <Footer/>
  </div>
  </motion.div>
    </>
  )
}
export default Step3;