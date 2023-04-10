import { Link } from "react-router-dom";
import SmoothProgressBar from "./SmoothProgressBar";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";


const Step2 = ()=>{
    return(
        <>
        <motion.div
        className="ppp"        
        >
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
          <SmoothProgressBar value="60"  num="60"/>
          </div>
          {/* <div className="progress step-bar-area">
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Basic example"
              style={{ width: "60%" }}
              aria-valuenow={60}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div> */}
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="deal-box">
            <h3 className="dark-blue text-center fw-bold mb-4">
              What is your date of birth?
            </h3>
            <div className="row mb-3 justify-content-center">
              <div className="col-md-8">
                <div className="dob-space">
                  <p className="mb-0 over-18">
                    You must be over 18 to take out a mobile phone contract
                  </p>
                </div>
                <div className="dob dob-space">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control deals-form-control"
                      placeholder="DD"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control deals-form-control"
                      placeholder="MM"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control deals-form-control"
                      placeholder="YYYY"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <Link to="/Step3" className="green-btn"> Continue
                  </Link>
                                  </div>
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
export default Step2;