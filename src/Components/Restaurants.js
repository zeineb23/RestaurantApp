import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default function Restaurants() {
  const [data, setData] = useState([]);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    fetch('http://localhost:5000/resto')
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // The empty array ensures this effect runs only once

  return (
    <div>
        <br/><br/>
        <div className="work-section-top">
            <p className="primary-subheading">Explore our restaurants</p>
        </div>

        <div className="cards">
        <Row xs={1} md={3} className="g-3">
                {data.map(card => (
                    <Col key={card.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={card.image} />
                            <Card.Body>
                                <Card.Title>{card.nom}</Card.Title>
                                <hr/>
                                <Card.Text><b>Pays : </b>{card.pays}</Card.Text>
                                <Card.Text><b>Ville : </b>{card.ville}</Card.Text>
                                <Card.Text><b>Catégorie : </b>{card.categorie}</Card.Text>
                                <hr/>
                                <button>Explore menu</button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    </div>
  );
}
