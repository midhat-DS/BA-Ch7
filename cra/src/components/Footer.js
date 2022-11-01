import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';

const Footer = ()=>{
    return (
        <CDBContainer>
            <CDBFooter className="shadow">
          <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
            <CDBBox display="flex" justifyContent="between" className="flex-wrap">
              <CDBBox>
                <p className="my-3" style={{ width: '250px' }}>
                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                </p>
                <p lassName="my-3" style={{ width: '250px' }}>binarcarrental@gmail.com</p>
                <p lassName="my-3" style={{ width: '250px' }}>081-233-334-808</p>
              </CDBBox>
                <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
                  <CDBFooterLink href="#services">Our Services</CDBFooterLink>
                  <CDBFooterLink href="#why">Why Us</CDBFooterLink>
                  <CDBFooterLink href="#testimonial">Testimonial</CDBFooterLink>
                  <CDBFooterLink href="#faq">FAQ</CDBFooterLink>
                </CDBBox>
              <CDBBox>
                <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Connect with us
                </p>
                <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                    
                </CDBBox>
              </CDBBox>
              <CDBBox>
                <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Copyright  Binar 2022
                </p>
                <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                  <CDBFooterLink href="/">Contrast</CDBFooterLink>
                </CDBBox>
              </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBFooter>
        </CDBContainer>
        
      );
}
export default Footer
  