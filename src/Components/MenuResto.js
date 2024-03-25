import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Col, Row, Button } from "react-bootstrap";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function MenuResto() {
  const [menuData, setMenuData] = useState([]);
  const query = useQuery();
  const restoId = query.get("id");
  const restoName = query.get("name");

  useEffect(() => {
    // Fetch the menu data using the restoId
    fetch(`http://localhost:5000/menu/resto/${restoId}`)
      .then((response) => response.json())
      .then((data) => setMenuData(data.data))
      .catch((error) => console.error("Error fetching menu data:", error));
  }, [restoId]);

  // Render the menu data
  return (
    <div>
        <br/><br/>
        <div className="work-section-top">
            <p className="primary-subheading">Menu of {restoName}</p>
        </div>

        <div className="cards">
        <Row xs={1} md={3} className="g-3">
                {menuData.map(card => (
                    <Col key={card.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={card.image} />
                            <Card.Body>
                                <Card.Title><b>{card.name}</b></Card.Title>
                                <hr/>
                                <Card.Text>{card.desc}</Card.Text>
                                <Card.Text><b>Price :</b> {card.price} TND</Card.Text>
                                <hr/>
                                <Button variant="secondary">Order now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    </div>
  );
}
