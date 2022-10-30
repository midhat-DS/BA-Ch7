// import {Container, Row, Image, ListGroup, Col}  from "react-bootstrap"
import * as ReactBS  from "react-bootstrap"
import img from '../../assets/img/img_service.png'
import ic from '../../assets/ic/icon_Group_53.svg'
const OurServices = ()=>{
    return(
        <ReactBS.Container>
            <ReactBS.Row>
                <ReactBS.Col className="servCol col-lg-7 ">
                <ReactBS.Image src={img}/>
                </ReactBS.Col>
                <ReactBS.Col className="servCol col-lg-5 ">
                    <h1 class="heading">Best Car Rental for any kind of trip in Karawang!</h1>
                    <p class="subheading">Sewa mobil di Karawang bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    <ReactBS.ListGroup className="lgserv">
                        <ReactBS.ListGroup.Item><ReactBS.Image src={ic}/>Sewa Mobil Dengan Supir di Bali 12 Jam</ReactBS.ListGroup.Item>
                        <ReactBS.ListGroup.Item><ReactBS.Image src={ic}/>Sewa Mobil Lepas Kunci di Bali 24 Jam</ReactBS.ListGroup.Item>
                        <ReactBS.ListGroup.Item><ReactBS.Image src={ic}/>Sewa Mobil Jangka Panjang Bulanan</ReactBS.ListGroup.Item>
                        <ReactBS.ListGroup.Item><ReactBS.Image src={ic}/>Gratis Antar - Jemput Mobil di Bandara</ReactBS.ListGroup.Item>
                        <ReactBS.ListGroup.Item><ReactBS.Image src={ic}/>Layanan Airport Transfer / Drop In Out</ReactBS.ListGroup.Item>
                    </ReactBS.ListGroup>
                </ReactBS.Col>
            </ReactBS.Row>
        </ReactBS.Container>
    )
}
export default OurServices