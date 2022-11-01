import React from "react";
import star from '../../assets/ic/icon_rate.svg'
import pp from '../../assets/img/pp.png'
import * as ReactBS from 'react-bootstrap'

const Cardousel = ()=>{
    return (
        <item>
            <ReactBS.Row className="carow">
                <ReactBS.Col  className ="profil">
                    <ReactBS.Image className="ptprofil"  src= {pp} alt="" style={{width: "25%"}}/>
                </ReactBS.Col>
                <ReactBS.Col  className="rate">
                    <ReactBS.Image src= {star} class="star" alt="" style={{width: "25%"}} />
                    <p className="review">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                    <h3 className="name">Jane 25, Bromo</h3>
                </ReactBS.Col>
            </ReactBS.Row>
        </item>
    )
}

export default Cardousel;

