import React from "react"

const IndexPage = ()=>{
  return(
<>
  
  
  {/* header section end */}
  {/* deal section */}
  <section className="deal-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <h2 className="blue swytch-title text-center">
            Find <strong>A Better Deal</strong> On Mobile Phone Contracts
          </h2>
          <div className="progress step-bar-area">
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Basic example"
              style={{ width: "15%" }}
              aria-valuenow={15}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="deal-box">
            <h3 className="dark-blue text-center fw-bold mb-5">
              Who is your existing provider?
            </h3>
            <ul className="deal-list">
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
                <label className="form-check-labels" htmlFor="provider">
                  <img src="img/three.svg" alt="" className="radio_img" />
                </label>
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
                <label className="form-check-labels" htmlFor="provider">
                  <img src="img/sky.svg" alt="" className="radio_img" />
                </label>
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
                <label className="form-check-labels" htmlFor="provider">
                  <img src="img/ee.svg" alt="" className="radio_img" />
                </label>
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
                <label className="form-check-labels" htmlFor="provider">
                  <img src="img/o2.svg" alt="" className="radio_img" />
                </label>
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
                <label className="form-check-labels" htmlFor="provider">
                  <img src="img/voda.svg" alt="" className="radio_img" />
                </label>
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
                <label className="form-check-labels" htmlFor="provider">
                  <img src="img/gg.svg" alt="" className="radio_img" />
                </label>
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
                <label className="form-check-labels" htmlFor="provider">
                  <p className="mb-0 radio-title">Others</p>
                </label>
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
                <label className="form-check-labels" htmlFor="provider">
                  <p className="mb-0 radio-title">
                    I Do Not <br />
                    Have One
                  </p>
                </label>
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
                <a className="gray text-decoration-underline fs-14" href="">
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
  <section className="trust-me bottom-space">
    <div className="container">
      <div className="row">
        <div className="col-md-12">trust code</div>
      </div>
    </div>
  </section>
  <div className="tsg">
    <section className="guarantee text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 pb-5">
            <h3 className="blue mb-4 fw-bold">The Swytch Guarantee</h3>
            <p className="dark-blue">
              Swytching your mobile couldn’t be simpler. Tell us about what you
              are looking for and we will match you to one of our exclusive
              partner deals. You will be setup with your new provider in no
              time.{" "}
            </p>
            <p className="dark-blue">
              We have exclusive offers from some of the UK’s top mobile
              providers. We work with them directly and pass on the savings so
              you don’t pay a penny to swytch with us!
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="check-mark text-center">
      <img src="img/checkmark.png" alt="" />
    </div>
  </div>
    
</>
  )
}
export default IndexPage



