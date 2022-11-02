import OurServices from "./landingPage/OurServices.js";
import WhyUs from "./landingPage/WhyUs.js";
import Testi from "./landingPage/Testimonial.js";
import GetSta from "./landingPage/getStart.js";
import Faq from "./landingPage/FAQ.js";


const LandingPage = () =>{
    return(
        <div className="Land">
          
          <div id="myServ" className="myServ">
            <OurServices />
          </div>
          <div id="why" className="why">
            <WhyUs />
          </div>
          <div id="testimonial" className="testimonial">
            <Testi />
          </div>
          <div className="getSta">
            <GetSta />
          </div>
          <div id="faq" className="faq">
            <Faq />
          </div>
        </div>
    )
}
export default LandingPage