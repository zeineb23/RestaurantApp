import React from "react";
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
    const cardData = [
        { 
            id: 1, 
            imageSrc: 'https://th.bing.com/th/id/R.11e615426ae5e806ffb8ac962c51e062?rik=FnmVnQd8AG0XwA&pid=ImgRaw',
            title: "Chef's name 1",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content 1.",
            stars : 3,
        },
        { 
            id: 1, 
            imageSrc: 'https://th.bing.com/th/id/R.11e615426ae5e806ffb8ac962c51e062?rik=FnmVnQd8AG0XwA&pid=ImgRaw',
            title: "Chef's name 1",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content 1.",
            stars : 3
        },
        { 
            id: 1, 
            imageSrc: 'https://th.bing.com/th/id/R.11e615426ae5e806ffb8ac962c51e062?rik=FnmVnQd8AG0XwA&pid=ImgRaw',
            title: "Chef's name 1",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content 1.",
            stars : 3
        },
        { 
            id: 1, 
            imageSrc: 'https://th.bing.com/th/id/R.11e615426ae5e806ffb8ac962c51e062?rik=FnmVnQd8AG0XwA&pid=ImgRaw',
            title: "Chef's name 1",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content 1.",
            stars : 3
        },    
        { 
            id: 1, 
            imageSrc: 'https://th.bing.com/th/id/R.11e615426ae5e806ffb8ac962c51e062?rik=FnmVnQd8AG0XwA&pid=ImgRaw',
            title: "Chef's name 1",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content 1.",
            stars : 3
        },
        { 
            id: 1, 
            imageSrc: 'https://th.bing.com/th/id/R.11e615426ae5e806ffb8ac962c51e062?rik=FnmVnQd8AG0XwA&pid=ImgRaw',
            title: "Chef's name 1",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content 1.",
            stars : 3
        },
        { 
            id: 1, 
            imageSrc: 'https://th.bing.com/th/id/R.11e615426ae5e806ffb8ac962c51e062?rik=FnmVnQd8AG0XwA&pid=ImgRaw',
            title: "Chef's name 1",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content 1.",
            stars : 3
        },{ 
            id: 1, 
            imageSrc: 'https://th.bing.com/th/id/R.11e615426ae5e806ffb8ac962c51e062?rik=FnmVnQd8AG0XwA&pid=ImgRaw',
            title: "Chef's name 1",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content 1.",
            stars : 3
        },
    ];

  return (
    <div>
    <div className="title-chefs">
        <h2>Meet our chefs</h2>
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
                            {[...Array(card.stars)].map((_, index) => (
                                <StarIcon key={index} style={{ color: 'gold' }} />
                            ))}
                            <hr/>
                            <Card.Text>{card.content}</Card.Text>
                            <hr/>
                            <a href="#"><TwitterIcon/></a> <a href="#"><InstagramIcon/></a> <a href="#"><FacebookIcon/></a>
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