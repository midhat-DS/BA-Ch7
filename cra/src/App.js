import "./App.css"
import "./Style/landingPage.css"
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import OurServices from "./components/landingPage/OurServices.js";
import WhyUs from "./components/landingPage/WhyUs.js";
import Testi from "./components/landingPage/Testimonial";
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
    </div>
  )
}

export default App;
