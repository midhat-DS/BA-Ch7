// import {Row, Container, Col, Card, Image} from "react-bootstrap"
import * as ReactBS  from "react-bootstrap"

const Faq = ()=>{
    return(
        <ReactBS.Container>
            <ReactBS.Row>
                <ReactBS.Col>
                    <h1>Frequently Asked Question</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </ReactBS.Col>
                <ReactBS.Col>
                    <ReactBS.Accordion defaultActiveKey="0">
                        <ReactBS.Accordion.Item eventKey="0">
                            <ReactBS.Accordion.Header>Apa saja syarat yang dibutuhkan?</ReactBS.Accordion.Header>
                            <ReactBS.Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </ReactBS.Accordion.Body>
                        </ReactBS.Accordion.Item>
                        <ReactBS.Accordion.Item eventKey="1">
                            <ReactBS.Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</ReactBS.Accordion.Header>
                            <ReactBS.Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </ReactBS.Accordion.Body>
                        </ReactBS.Accordion.Item>
                        <ReactBS.Accordion.Item eventKey="2">
                            <ReactBS.Accordion.Header>Berapa hari sebelumnya sabaiknya booking sewa mobil?</ReactBS.Accordion.Header>
                            <ReactBS.Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </ReactBS.Accordion.Body>
                        </ReactBS.Accordion.Item>
                        <ReactBS.Accordion.Item eventKey="3">
                            <ReactBS.Accordion.Header>Apakah Ada biaya antar-jemput?</ReactBS.Accordion.Header>
                            <ReactBS.Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </ReactBS.Accordion.Body> 
                            </ReactBS.Accordion.Item>
                        <ReactBS.Accordion.Item eventKey="4">
                            <ReactBS.Accordion.Header> Bagaimana jika terjadi kecelakaan</ReactBS.Accordion.Header>
                            <ReactBS.Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </ReactBS.Accordion.Body>
                        </ReactBS.Accordion.Item>
                    </ReactBS.Accordion>
                </ReactBS.Col>
            </ReactBS.Row>
        </ReactBS.Container>
          
    )
}
export default Faq