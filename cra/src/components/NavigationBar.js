import * as ReactBS  from "react-bootstrap"
// import {Navbar, Container, Nav, Button, Image} from "react-bootstrap"
import Img from '../assets/img/img_logo.png'

const NavigationBar = () => {

    return(
        <ReactBS.Navbar className="navBar navbar-expand-lg ps-5 pe-5 fixed-top">
            <ReactBS.Container className="navCont container-lg my-1" >
                <ReactBS.Navbar.Brand><ReactBS.Image src={Img} /></ReactBS.Navbar.Brand>
                <ReactBS.Nav>
                    <ReactBS.Nav.Link>Our services</ReactBS.Nav.Link>
                    <ReactBS.Nav.Link>Why Us</ReactBS.Nav.Link>
                    <ReactBS.Nav.Link>Testimonial</ReactBS.Nav.Link>
                    <ReactBS.Nav.Link>FAQ</ReactBS.Nav.Link>
                    <ReactBS.Button variant="success" className="btn-cm" >Register</ReactBS.Button>{' '}
                </ReactBS.Nav>
            </ReactBS.Container>
        </ReactBS.Navbar>
        
    )
}
export default NavigationBar
