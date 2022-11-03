// import {Col, Container, Row, Button, Image} from "react-bootstrap"
import * as ReactBS from "react-bootstrap"
import Img from '../assets/img/img_car.png'

const Intro=()=>{
    return(
        <ReactBS.Container className="introCont">
            <ReactBS.Row>
                <ReactBS.Col className="hserv col-md-5" >
                    <h1 className="heading">Sewa & Rental Mobil Terbaik di kawasan Karawang</h1>
                    <p className="subheading">Selamat datang di Binar Car Rental. 
                        Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <ReactBS.Button className="btn-cm"variant="success" href="/sewa">Mulai Sewa Mobil</ReactBS.Button>{''}
                </ReactBS.Col>
                <ReactBS.Col className="col col-md-7">
                    <ReactBS.Image className="car"src={Img}/>
                </ReactBS.Col>
            </ReactBS.Row>
        </ReactBS.Container>
    )
}
export default Intro