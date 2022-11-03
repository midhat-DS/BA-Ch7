import React from 'react'
import * as ReactBS from 'react-bootstrap'

const Filter = ()=>{
    return(
        <ReactBS.Container>
            <ReactBS.Form>
                <ReactBS.Row>
                    <ReactBS.Col>
                            <ReactBS.Form.Group className="mb-3">
                                <ReactBS.Form.Label>Tipe Driver</ReactBS.Form.Label>
                                <ReactBS.Form.Select active>
                                <option value="" hidden>Pilih Tipe Driver</option>
                                <option value="true">Dengan Supir</option>
                                <option value="true">Tanpa Supir(Lepas Kunci)</option>
                                </ReactBS.Form.Select>
                            </ReactBS.Form.Group>
                        </ReactBS.Col>
                        <ReactBS.Col>
                            <ReactBS.Form.Group className="mb-3" controlId="tanggal">
                                <ReactBS.Form.Label>Tanggal</ReactBS.Form.Label>
                                <ReactBS.Form.Control type="date" placeholder="filterDate" />
                            </ReactBS.Form.Group>
                        </ReactBS.Col>
                        <ReactBS.Col>
                            <ReactBS.Form.Group className="mb-3" controlId="waktu">
                                <ReactBS.Form.Label>Waktu</ReactBS.Form.Label>
                                <ReactBS.Form.Control type="time" placeholder="filterTime" />
                            </ReactBS.Form.Group>
                        </ReactBS.Col>
                        <ReactBS.Col>
                            <ReactBS.Form.Group className="mb-3" controlId="jumlah">
                                <ReactBS.Form.Label>Jumlah</ReactBS.Form.Label>
                                <ReactBS.Form.Control type="number" placeholder="jumlah" />
                            </ReactBS.Form.Group>
                        </ReactBS.Col>
                        <ReactBS.Col>
                            <ReactBS.Button className="btn-cm" variant="success" type="submit"> Submit </ReactBS.Button>
                            <ReactBS.Button className="btn-cm" variant="danger" type="reset"> Reset </ReactBS.Button>
                        </ReactBS.Col>
                </ReactBS.Row>
            </ReactBS.Form>
  
        </ReactBS.Container>
    )
}
export default Filter