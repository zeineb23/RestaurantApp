import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Chefs.css';
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import StarIcon from '@mui/icons-material/Star';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from "@mui/icons-material/Facebook";

function Chefs() {
    const [data, setData] = useState([]);

    // Fetch data from the backend when the component mounts
    useEffect(() => {
      fetch('http://localhost:5000/chef')
        .then(response => response.json())
        .then(data => setData(data.data))
        .catch(error => console.error('Error fetching data:', error));
    }, []); // The empty array ensures this effect runs only once
  
  return (
    <div>
        <br/><br/>
        <div className="work-section-top">
            <p className="primary-subheading">Meet our chefs</p>
        </div>

    <div className="cards">
    <Row xs={1} md={3} className="g-3">
            {data.map(card => (
                <Col key={card.id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{ height: '20rem' }} variant="top" src={card.image} />
                        <Card.Body>
                            <Card.Title>{card.name}</Card.Title>
                            <Card.Text>{card.desc}</Card.Text>
                            {[...Array(card.stars)].map((_, index) => (
                                <StarIcon key={index} style={{ color: 'gold' }} />
                            ))}
                            <hr/>
                            <Card.Text>{card.content}</Card.Text>
                            <Card.Text><b>Restaurant :</b> {card.resto.nom}</Card.Text>
                            <hr/>
                            <a href="#"><TwitterIcon/></a> <a href="#"><InstagramIcon sx={{ color: "#8f50ec" }}/></a> <a href="#"><FacebookIcon/></a>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </div>
    </div>
  );
}

export default Chefs;