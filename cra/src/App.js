import "./App.css"
import "./Style/landingPage.css"
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import OurServices from "./components/landingPage/OurServices.js";
import WhyUs from "./components/landingPage/WhyUs.js";
import Testi from "./components/landingPage/Testimonial.js";
import GetSta from "./components/landingPage/getStart.js";
import Faq from "./components/landingPage/FAQ.js";
import Footer from "./components/Footer";
function App(){
  return (
    <div className="myBg">
      <NavigationBar />
        <div className="myIntro">
          <Intro/>
        </div>
        <div className="myServ">
          <OurServices />
        </div>
        <div className="why">
          <WhyUs />
        </div>
        <div className="testimonial">
          <Testi />
        </div>
        <div className="getSta">
          <GetSta />
        </div>
        <div className="faq">
          <Faq />
        </div>
        <div className="footer">
          <Footer />
        </div>
    </div>
  )
}

export default App;
