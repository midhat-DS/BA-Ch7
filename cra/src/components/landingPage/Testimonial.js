
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
                <OwlCarousel className="owl-theme" items="2" nav loop center>
                    <Cardousel/>
                    <Cardousel/>
                    <Cardousel/>
                </OwlCarousel>
            </ReactBS.Row>

        )
    }

export default Testi