import "./App.css"
import "./Style/landingPage.css"
import LandingPage from "./components/Landingpage.js";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

function App(){
  return (
    <div className="myBg">
      <NavigationBar />
        <div className="myIntro">
          <Intro/>
        </div>
        <div className="LP">
          <LandingPage />
        </div>
        <div className="footer">
          <Footer />
        </div>
    </div>

  )
}

export default App;
