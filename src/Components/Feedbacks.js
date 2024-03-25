import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  "../CSS/feedbacks.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarIcon from '@mui/icons-material/Star';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

export default function Feedbacks() {
    const [data, setData] = useState([]);

    // Fetch data from the backend when the component mounts
    useEffect(() => {
      fetch('http://localhost:5000/feedback')
        .then(response => response.json())
        .then(data => setData(data.data))
        .catch(error => console.error('Error fetching data:', error));
    }, []); // The empty array ensures this effect runs only once

    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    const chunkedData = chunkArray(data, 3);

    return(
        <div>
            <br/><br/>
            <div className="work-section-top">
                <p className="primary-subheading">Feedbacks</p>
                <h1 className="primary-heading"><center>What our costumers say about us </center></h1>
            </div>
            <div className="feedbacks">
            <Carousel className="custom-carousel" style={{ controlColor: '#8f50ec' }}>
            {chunkedData.map((chunk, index) => (
                <Carousel.Item key={index}>
                    <div className="feedbacks">
                        <Row xs={1} md={3} className="g-3">
                            {chunk.map(card => (
                                <Col className="feedback" key={card.id}>
                                    <div className="bulle"><h6>"{card.desc}"</h6></div>
                                    <div className="user">
                                        <div><AccountCircleIcon sx={{ color: "#776bcc", fontSize: 50 }} /></div>
                                        <div className="userName">
                                            <h5>{card.user}</h5>
                                            {[...Array(card.stars)].map((_, index) => (
                                                <StarIcon key={index} style={{ color: 'gold' }} />
                                            ))}
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Carousel.Item>
            ))}
            
            </Carousel>
        </div>
    </div>
    );       
    
}
