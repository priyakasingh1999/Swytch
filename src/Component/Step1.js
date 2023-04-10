import { Link } from "react-router-dom";
import SmoothProgressBar from "./SmoothProgressBar";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";



const Step1 = ()=>{
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
          <SmoothProgressBar value="30"  num="30"/>
          </div>

        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="deal-box">
            <h3 className="dark-blue text-center fw-bold mb-5">
              Choose your preferred brand
            </h3>
            <ul className="deal-list brands mb-3">
              <li>
                <input
                  type="radio"
                  className="form-check-input brand"
                  title="All"
                  id="provider"
                  name="deals"
                  defaultValue="All"
                  required=""
                />
                <Link to="/Step2"><label className="form-check-labels" htmlFor="provider">
                  <img src="img/apple.svg" alt="" className="radio_img" />
                  <p className="brand-title mb-0">iPhone (IOS)</p>
                </label> </Link>
                
              </li>
              <li>
                <input
                  type="radio"
                  className="form-check-input brand"
                  title="All"
                  id="provider"
                  name="deals"
                  defaultValue="All"
                  required=""
                />
                <Link to="/Step2"><label className="form-check-labels" htmlFor="provider">
                  <img src="img/android.svg" alt="" className="radio_img" />
                  <p className="brand-title mb-0">Android</p>
                </label> </Link>
                
              </li>
              <li>
                <input
                  type="radio"
                  className="form-check-input brand"
                  title="All"
                  id="provider"
                  name="deals"
                  defaultValue="All"
                  required=""
                />
                  <Link to="/Step2"><label className="form-check-labels" htmlFor="provider">
                  <img src="img/sim.svg" alt="" className="radio_img" />
                  <p className="brand-title mb-0">Sim Only</p>
                </label> </Link>
                
              </li>
              <li>
                <input
                  type="radio"
                  className="form-check-input brand"
                  title="All"
                  id="provider"
                  name="deals"
                  defaultValue="All"
                  required=""
                />
                  <Link to="/Step2"><label className="form-check-labels" htmlFor="provider">
                  <p className="mb-0 radio-title">Others</p>
                </label> </Link>
                
              </li>
            </ul>
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
export default Step1;