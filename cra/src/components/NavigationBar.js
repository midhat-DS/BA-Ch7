import * as ReactBS  from "react-bootstrap"
// import {Navbar, Container, Nav, Button, Image} from "react-bootstrap"
import Img from '../assets/img/img_logo.png'


const NavigationBar = () => {

    return(
        <ReactBS.Navbar className="navBar navbar-expand-lg ps-5 pe-5 fixed-top">
            <ReactBS.Container className="navCont container-lg my-1" >
                <ReactBS.Navbar.Brand><ReactBS.Image src={Img} /></ReactBS.Navbar.Brand>
                <ReactBS.Nav>
                    <ReactBS.Nav.Link href="#myServ">Our services</ReactBS.Nav.Link>
                    <ReactBS.Nav.Link href="#why">Why Us</ReactBS.Nav.Link>
                    <ReactBS.Nav.Link href="#testimonial">Testimonial</ReactBS.Nav.Link>
                    <ReactBS.Nav.Link href="#faq">FAQ</ReactBS.Nav.Link>
                    <ReactBS.Button variant="success" className="btn-cm" >Register</ReactBS.Button>{' '}
                </ReactBS.Nav>
            </ReactBS.Container>
        </ReactBS.Navbar>
        
    )
}
export default NavigationBar
