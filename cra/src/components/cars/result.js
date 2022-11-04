import React from 'react'
import * as ReactBS from 'react-bootstrap'
import Img from '../../assets/img/magne.png'


const Result = (props) => {
    if (props.data.length === 0) {
      return (
        <>
          <img
            src={Img}
            className="d-block mx-auto w-25"
            alt="nope"
          />
          <h5 className="text-center">
            Silahkan lakukan filter terlebih dahulu
          </h5>
        </>
      );
    } else {
      return (
        <div className="searchRes">
            <div className="container">
                <div id="cars-container" className="row card-pencarian">
                {props.data.map((item) => (
                    <div className="card mb-3" key={item.id}>
                    <div className="pencarian-body-image">
                        <img src={item.image} alt={item.model} className="car-thumbnail" />
                    </div>
                    <div className="pencarian-body-text">
                        <p className="tipe-mobil">{item.type}</p>
                        <p className="harga-mobil">
                        Rp{" "}
                        {item.rentPerDay
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                        / hari
                        </p>
                        <p className="deskripsi-mobil">{item.description}</p>
                        <div className="col-lg-6 col-sm-12 deskripsi-text">
                        <div className="marklist-container col-sm-12">
                            <div className="marklist">
                            <img
                                src="images/fi_users.png"
                                style={{ width: "20px" }}
                                alt=""
                            />
                            <p className="description-text jumlah-kursi">
                                {item.capacity} orang
                            </p>
                            </div>
                            <div className="marklist">
                            <img
                                src="images/fi_settings.png"
                                style={{ width: "20px" }}
                                alt=""
                            />
                            <p className="description-text tipe-driver">
                                {item.transmission}
                            </p>
                            </div>
                            <div className="marklist">
                            <img
                                src="images/fi_calender.png"
                                style={{ width: "20px" }}
                                alt=""
                            />
                            <p className="description-text tahun">
                                Tahun {item.year}
                            </p>
                            </div>
                        </div>
                        </div>
    
                        <ReactBS.Button className="btn-cm"  variant="success" > Pilih Mobil </ReactBS.Button>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
        
      );
    }
  };
  
  export default Result;