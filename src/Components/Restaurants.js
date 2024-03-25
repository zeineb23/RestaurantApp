import React, { useState, useEffect } from "react";
import { Card, Col, Row, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Restaurants() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/resto")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter data based on search queries
  const filteredData = data.filter(
    (card) =>
      card.nom.toLowerCase().includes(searchName.toLowerCase()) &&
      card.categorie.toLowerCase().includes(searchCategory.toLowerCase())
  );

  return (
    <div>
      <br />
      <br />
      <div className="work-section-top">
        <p className="primary-subheading">Explore our restaurants</p>
      </div>

      {/* Search form */}
      <Form className="d-flex justify-content-center mb-4" style={{ marginTop: '70px' }}>
        <FormControl
          type="search"
          placeholder="Search by name"
          className="me-2"
          aria-label="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          style={{ width: '250px' }}
        />
        <FormControl
          type="search"
          placeholder="Search by category"
          className="me-2"
          aria-label="Search by category"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          style={{ width: '250px' }}
        />
        <Button variant="outline-dark">Search</Button>
      </Form>

      <div className="cards">
        <Row xs={1} md={3} className="g-3">
          {filteredData.map((card) => (
            <Col key={card.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                  <Card.Title>{card.nom}</Card.Title>
                  <hr />
                  <Card.Text>
                    <b>Pays : </b>
                    {card.pays}
                  </Card.Text>
                  <Card.Text>
                    <b>Ville : </b>
                    {card.ville}
                  </Card.Text>
                  <Card.Text>
                    <b>Catégorie : </b>
                    {card.categorie}
                  </Card.Text>
                  <hr />
                  <Link to={`/menu_resto?id=${card.id}&name=${card.nom}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <Button variant="secondary">Explore menu</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
