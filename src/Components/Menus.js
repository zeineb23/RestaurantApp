import React from "react";
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Pagination from 'react-bootstrap/Pagination';

export default function Menus() {
  const cardData = [
      { 
          id: 1, 
          imageSrc: 'https://st5.depositphotos.com/61087132/68432/i/450/depositphotos_684328302-stock-photo-large-pan-pizza-topped-pepperoni.jpg',
          title: "Pizza's name 1",
          content: "Some quick example text to build on the card title and make up the bulk of the card's content 1.",
          price : '15',
      },
      { 
        id: 1, 
        imageSrc: 'https://st5.depositphotos.com/61087132/68432/i/450/depositphotos_684328302-stock-photo-large-pan-pizza-topped-pepperoni.jpg',
        title: "Pizza's name 1",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content 1.",
        price : '15',
    },      { 
      id: 1, 
      imageSrc: 'https://st5.depositphotos.com/61087132/68432/i/450/depositphotos_684328302-stock-photo-large-pan-pizza-topped-pepperoni.jpg',
      title: "Pizza's name 1",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content 1.",
      price : '15',
    },{ 
      id: 1, 
      imageSrc: 'https://st5.depositphotos.com/61087132/68432/i/450/depositphotos_684328302-stock-photo-large-pan-pizza-topped-pepperoni.jpg',
      title: "Pizza's name 1",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content 1.",
      price : '15',
    },{ 
      id: 1, 
      imageSrc: 'https://st5.depositphotos.com/61087132/68432/i/450/depositphotos_684328302-stock-photo-large-pan-pizza-topped-pepperoni.jpg',
      title: "Pizza's name 1",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content 1.",
      price : '15',
    },{ 
      id: 1, 
      imageSrc: 'https://st5.depositphotos.com/61087132/68432/i/450/depositphotos_684328302-stock-photo-large-pan-pizza-topped-pepperoni.jpg',
      title: "Pizza's name 1",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content 1.",
      price : '15',
    },{ 
      id: 1, 
      imageSrc: 'https://st5.depositphotos.com/61087132/68432/i/450/depositphotos_684328302-stock-photo-large-pan-pizza-topped-pepperoni.jpg',
      title: "Pizza's name 1",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content 1.",
      price : '15',
    },{ 
      id: 1, 
      imageSrc: 'https://st5.depositphotos.com/61087132/68432/i/450/depositphotos_684328302-stock-photo-large-pan-pizza-topped-pepperoni.jpg',
      title: "Pizza's name 1",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content 1.",
      price : '15',
    },{ 
      id: 1, 
      imageSrc: 'https://st5.depositphotos.com/61087132/68432/i/450/depositphotos_684328302-stock-photo-large-pan-pizza-topped-pepperoni.jpg',
      title: "Pizza's name 1",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content 1.",
      price : '15',
    },
  ];
  return (
    <div>
        <div className="title-chefs">
            <h2>Explore our menu</h2>
        </div>
        <hr/>

        <div className="cards">
        <Row xs={1} md={3} className="g-3">
                {cardData.map(card => (
                    <Col key={card.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={card.imageSrc} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <hr/>
                                <Card.Text>{card.content}</Card.Text>
                                <hr/>
                                <div>Price : {card.price} $</div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    </div>
  );
}
