
import React from "react";
import * as ReactBS from 'react-bootstrap'
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import Cardousel from './carousel.js'


const Testi = ()=>{
        
        return(
            <ReactBS.Row>
                <div className="hTesti">
                    <h3>Testimonial</h3>
                    <p>Berbagai review positif dari para pelanggan kami</p>
                </div>,
                <OwlCarousel className="owl-theme" items="2" nav loop center margin="20">
                    <Cardousel/>
                    <Cardousel/>
                    <Cardousel/>
                </OwlCarousel>
            </ReactBS.Row>

        )
    }


// import Carousel from "react-elastic-carousel";
// import Card from "./card";

// const Testi = ()=>{
//     const breakPoints = [
//         { width: 500, itemsToShow: 1},
//         { width: 768, itemsToShow: 2},
//         { width: 1200, itemsToShow: 3},
//         { width: 1500, itemsToShow: 4}
//     ];
    
//     return(
//         <Carousel breakPoints={breakPoints}>
//             <Card number="1" />
//             <Card number="2" />
//             <Card number="3" />
//         </Carousel>
//     )
// }
export default Testi