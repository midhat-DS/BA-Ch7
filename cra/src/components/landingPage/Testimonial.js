// import {Row, Container, Col, Card, Image} from "react-bootstrap"
import Carousel from "react-elastic-carousel";
import Card from "./card";

const Testi = ()=>{
    const breakPoints = [
        { width: 500, itemsToShow: 1},
        { width: 768, itemsToShow: 2},
        { width: 1200, itemsToShow: 3},
        { width: 1500, itemsToShow: 4}
    ];
    
    return(
        <Carousel breakPoints={breakPoints}>
            <Card number="1" />
            <Card number="2" />
            <Card number="3" />
        </Carousel>
    )
}
export default Testi