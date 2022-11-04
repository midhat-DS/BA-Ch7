import React, { useEffect, useState } from 'react'
import * as ReactBS from 'react-bootstrap'
import Result from './result'
const Filter = ()=>{
    const [cars, setCars] = useState([])
    const [displayCars, setDisplayCars] = useState([])
    const [driverType, setDriverType] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [capacity, setCapacity] = useState('');

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
        .then ((response) => response.json())
        .then((data) => {
        console.log('data', data)
        setCars(data);
        }).catch((err)=>{
        console.log('err',err)
        })
    },[])

    const handleSearchCar = ()=>{
        console.log(driverType, date, time, capacity);

        const filteredCars = cars.filter(item => item.capacity >= capacity);
        console.log(filteredCars)


        setDisplayCars(filteredCars);
    }
    
    const handleReset = ()=>{
        setDisplayCars([]);
        setDriverType('');
        setDate('');
        setTime('');
        setCapacity('');
  }
    return(
        <div>
            <ReactBS.Container className="contFilt">
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
                                    <ReactBS.Form.Control value={date} type="date" placeholder="filterDate" onChange={(e) => setDate(e.target.value)}/>
                                </ReactBS.Form.Group>
                            </ReactBS.Col>
                            <ReactBS.Col>
                                <ReactBS.Form.Group className="mb-3" controlId="waktu">
                                    <ReactBS.Form.Label>Waktu</ReactBS.Form.Label>
                                    <ReactBS.Form.Control value={time} type="time" placeholder="filterTime" onChange={(e) => setTime(e.target.value)}/>
                                </ReactBS.Form.Group>
                            </ReactBS.Col>
                            <ReactBS.Col>
                                <ReactBS.Form.Group className="mb-3" controlId="jumlah">
                                    <ReactBS.Form.Label>Jumlah</ReactBS.Form.Label>
                                    <ReactBS.Form.Control value={capacity} type="number" placeholder="jumlah" onChange={(e) => setCapacity(e.target.value)}/>
                                </ReactBS.Form.Group>
                            </ReactBS.Col>
                            <ReactBS.Col>
                                <ReactBS.Button className="btn-cm" variant="success" onClick={handleSearchCar}> Submit </ReactBS.Button>
                                <ReactBS.Button className="btn-cm" variant="danger" onClick={handleReset}> Reset </ReactBS.Button>
                            </ReactBS.Col>
                    </ReactBS.Row>
                </ReactBS.Form>
            </ReactBS.Container>
            <ReactBS.Row >
                <ReactBS.Col>
                    <div className="result" >
                        <Result data={displayCars} />
                    </div>          
                </ReactBS.Col>

            </ReactBS.Row>
            

        </div>
        
        
    )
}
export default Filter