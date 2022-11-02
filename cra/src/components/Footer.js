import React from 'react';
// import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';
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
                  <a href="#services">Our Services</a>
                  <p></p>
                  <a href="#why">Why Us</a>
                  <p></p>
                   <a href="#testimonial">Testimonial</a>
                   <p></p>
                   <a href="#faq">FAQ</a>
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


        // <CDBContainer>
        //     <CDBFooter className="shadow">
        //   <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        //     <CDBBox display="flex" justifyContent="between" className="flex-wrap">
        //       <CDBBox>
        //         <p className="my-3" style={{ width: '250px' }}>
        //         Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
        //         </p>
        //         <p lassName="my-3" style={{ width: '250px' }}>binarcarrental@gmail.com</p>
        //         <p lassName="my-3" style={{ width: '250px' }}>081-233-334-808</p>
        //       </CDBBox>
        //         <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
        //           <CDBFooterLink href="#services">Our Services</CDBFooterLink>
        //           <CDBFooterLink href="#why">Why Us</CDBFooterLink>
        //           <CDBFooterLink href="#testimonial">Testimonial</CDBFooterLink>
        //           <CDBFooterLink href="#faq">FAQ</CDBFooterLink>
        //         </CDBBox>
        //       <CDBBox>
        //         <p className="h5 mb-4" style={{ fontWeight: '600' }}>
        //         Connect with us
        //         </p>
        //         <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                    
        //         </CDBBox>
        //       </CDBBox>
        //       <CDBBox>
        //         <p className="h5 mb-4" style={{ fontWeight: '600' }}>
        //         Copyright  Binar 2022
        //         </p>
        //         <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
        //           <CDBFooterLink href="/">Contrast</CDBFooterLink>
        //         </CDBBox>
        //       </CDBBox>
        //     </CDBBox>
        //   </CDBBox>
        // </CDBFooter>
        // </CDBContainer>
        
      );
}
export default Footer
  