import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, Pagination } from "react-bootstrap";

export default function Menus() {
  const [cardData, setCardData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((response) => response.json())
      .then((data) => setCardData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(cardData.length / itemsPerPage);

  // Get the current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cardData.slice(indexOfFirstItem, indexOfLastItem);

  // Render the pagination controls
  const renderPagination = () => {
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return <Pagination>{items}</Pagination>;
  };

  return (
    <div>
      <br />
      <br />
      <div className="work-section-top">
        <p className="primary-subheading">Explore our menu</p>
      </div>

      <div className="cards">
        <Row xs={1} md={3} className="g-3">
          {currentItems.map((card) => (
            <Col key={card.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                  <Card.Title>
                    <b>{card.name}</b>
                  </Card.Title>
                  <hr />
                  <Card.Text>{card.desc}</Card.Text>
                  <Card.Text>
                    <b>Restaurant :</b> {card.resto.nom}
                  </Card.Text>
                  <Card.Text>
                    <b>Price :</b> {card.price} TND
                  </Card.Text>
                  <hr />
                  <Button variant="secondary">Order now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <br/><br/>
        <div className="d-flex justify-content-center">
          {renderPagination()}
        </div>
      </div>
    </div>
  );
}
