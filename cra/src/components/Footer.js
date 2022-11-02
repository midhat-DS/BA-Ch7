import React from 'react';
import * as ReactBS from 'react-bootstrap'
import fb from '../assets/ic/icon_facebook.svg'
import twi from '../assets/ic/icon_twitter.svg'
import twic from '../assets/ic/icon_twitch.svg'
import mail from '../assets/ic/icon_mail.svg'
import ig from '../assets/ic/icon_instagram.svg'
import Img from '../assets/img/img_logo.png'

const Footer = ()=>{
    return (
      <ReactBS.Container>
        <ReactBS.Row>
          <ReactBS.Col>
            <p className="" style={{ width: '250px' }}>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
            </p>
            <p lassName="" style={{ width: '250px' }}>binarcarrental@gmail.com</p>
            <p lassName="" style={{ width: '250px' }}>081-233-334-808</p>
          </ReactBS.Col>
          <ReactBS.Col>
            <ReactBS.Nav.Link href="#myServ">Our services</ReactBS.Nav.Link>
            <ReactBS.Nav.Link href="#why">Why Us</ReactBS.Nav.Link>
            <ReactBS.Nav.Link href="#testimonial">Testimonial</ReactBS.Nav.Link>
            <ReactBS.Nav.Link href="#faq">FAQ</ReactBS.Nav.Link>
          </ReactBS.Col>
          <ReactBS.Col>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>Connect with us</p>
            <ReactBS.Image src={fb} alt=""></ReactBS.Image>
            <ReactBS.Image src={twi} alt=""></ReactBS.Image>
            <ReactBS.Image src={twic} alt=""></ReactBS.Image>
            <ReactBS.Image src={mail} alt=""></ReactBS.Image>
            <ReactBS.Image src={ig} alt=""></ReactBS.Image>
            
          </ReactBS.Col>
          <ReactBS.Col>
          <p className="h5 mb-4" style={{ fontWeight: '600' }}>Copyright  Binar 2022</p>
          <ReactBS.Image src={Img} alt=""></ReactBS.Image>
          </ReactBS.Col>
        </ReactBS.Row>
      </ReactBS.Container>       
      );
}
export default Footer
  