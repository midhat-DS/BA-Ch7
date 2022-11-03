
import NavigationBar from "./NavigationBar"
import Intro from "./Intro"
import Filter from "./cars/filter"
import Footer from "./Footer"

const Sewa = () =>{
    return(
        <div className="myBg">
        <NavigationBar />
          <div className="myIntro">
            <Intro/>
          </div>
          <div className="filter">
            <Filter />
          </div>
          <div className="footer">
            <Footer />
          </div>
      </div>
    )
}
export default Sewa