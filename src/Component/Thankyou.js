import { motion } from "framer-motion"
import Header from "./Header";
import Footer from "./Footer";

const Thankyou = ()=>{
  return(
    <>
    <motion.div  className="ppp" >
    <div>
  <Header/>  
  </div>
  <section className="thankyou pt-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 text-center">
          <div className="mb-5">
            <h1 className="white swytch-title text-center fw-bold">
              Thank you!
            </h1>
            <p className="white">
              Our Mobile Swytching Experts Will Call You To Discuss The Best
              Options Available For You, Keep An Eye Out For A Call From An{" "}
              <strong>0330</strong> Number.
            </p>
          </div>
          <div className="looking-better">
            <div className="thankyou-header">
              <p className="mb-0 fw-bold white fs-20">
                Looking for a better <br /> Broadband Deal?
              </p>
            </div>
            <div className="thankyou-body">
              <img
                src="img/speed.svg"
                className="img-fluid mb-4 speed-img"
                alt=""
              />
              <p className="fs-20 gray">
                Click “Get Quote” to unlock exclusive offers
              </p>
              <p className="mb-4 gray">Offers from £18.99 per month</p>
              <div className="">
                <a href="" className="get-quote">
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* thankyou section end */}
  <section className="or-call bottom-space blue-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p className="mb-2 white fs-20 text-center">Or call us now direct:</p>
          <div>
            <a href="" className="call-with-icon thankyou-icon">
              <img src="img/gray-call.svg" className="call-icon" alt="" />
              <span>03333 441 584</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="more-height"></div>
  <div>
  <Footer/>
  </div>
  </motion.div>
  </>
  
  )
}
export default Thankyou