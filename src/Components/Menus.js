import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default function Menus() {
  const [cardData, setCardData] = useState([]);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    fetch('http://localhost:5000/menu')
      .then(response => response.json())
      .then(data => setCardData(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // The empty array ensures this effect runs only once

  return (
    <div>
        <br/><br/>
        <div className="work-section-top">
            <p className="primary-subheading">Explore our menu</p>
        </div>

        <div className="cards">
        <Row xs={1} md={3} className="g-3">
                {cardData.map(card => (
                    <Col key={card.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={card.image} />
                            <Card.Body>
                                <Card.Title><b>{card.name}</b></Card.Title>
                                <hr/>
                                <Card.Text>{card.desc}</Card.Text>
                                <Card.Text><b>Restaurant :</b> {card.resto.nom}</Card.Text>
                                <Card.Text><b>Price :</b> {card.price} TND</Card.Text>
                                <hr/>
                                <button>Order now</button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    </div>
  );
}
