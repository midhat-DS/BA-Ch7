// import {Row, Container, Col, Card, Image} from "react-bootstrap"
import * as ReactBS  from "react-bootstrap"
import imgComp from '../../assets/ic/icon_complete.svg'
import imgPri from '../../assets/ic/icon_price.svg'
import imgServ from '../../assets/ic/icon_24hrs.svg'
import imgPro from '../../assets/ic/icon_professional.svg'
const WhyUs = ()=>{
    return(

        <div>
            <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>,
            <ReactBS.Container className="whyUs">
                <ReactBS.Row>
                    <ReactBS.Col className="cardC col-lg">
                        <ReactBS.Card ClassName="comp">
                            <ReactBS.Card.Body >
                                <ReactBS.Image src={imgComp} />
                                <ReactBS.Card.Subtitle className="sub mt-3 mb-3">Mobil Lengkap</ReactBS.Card.Subtitle>
                                <ReactBS.Card.Text >Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</ReactBS.Card.Text>
                            </ReactBS.Card.Body>
                        </ReactBS.Card>
                    </ReactBS.Col>
                    <ReactBS.Col className="cardC col-lg">
                        <ReactBS.Card ClassName="comp">
                            <ReactBS.Card.Body >
                                <ReactBS.Image src={imgPri} />
                                <ReactBS.Card.Subtitle className="sub mt-3 mb-3">Harga Murah</ReactBS.Card.Subtitle>
                                <ReactBS.Card.Text >Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</ReactBS.Card.Text>
                            </ReactBS.Card.Body>
                        </ReactBS.Card>
                    </ReactBS.Col>
                    <ReactBS.Col className="cardC col-lg">
                        <ReactBS.Card ClassName="comp">
                            <ReactBS.Card.Body >
                                <ReactBS.Image src={imgServ} />
                                <ReactBS.Card.Subtitle className="sub mt-3 mb-3">Layanan 24 Jam</ReactBS.Card.Subtitle>
                                <ReactBS.Card.Text >Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</ReactBS.Card.Text>
                            </ReactBS.Card.Body>
                        </ReactBS.Card>
                    </ReactBS.Col>
                    <ReactBS.Col className="cardC col-lg">
                        <ReactBS.Card ClassName="comp">
                            <ReactBS.Card.Body >
                                <ReactBS.Image src={imgPro} />
                                <ReactBS.Card.Subtitle className="sub mt-3 mb-3">Sopir Profesional</ReactBS.Card.Subtitle>
                                <ReactBS.Card.Text >Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</ReactBS.Card.Text>
                            </ReactBS.Card.Body>
                        </ReactBS.Card>
                    </ReactBS.Col>
                </ReactBS.Row>
            </ReactBS.Container>
          
    )
}
export default WhyUs