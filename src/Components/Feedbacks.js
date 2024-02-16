import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  "../CSS/feedbacks.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarIcon from '@mui/icons-material/Star';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

export default function Feedbacks() {
    const cardData = [
        { 
            id: 1, 
            title: "Zeineb Hachaichi",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            stars : 4,
        },{ 
            id: 1, 
            title: "Yosra Sassi",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            stars : 2,
        },{ 
            id: 1, 
            title: "Asma Hachaichi",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            stars : 3,
        },{ 
            id: 1, 
            title: "Seyfeddine Jouini",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            stars : 5,
        },{ 
            id: 1, 
            title: "User's name",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            stars : 1,
        },{ 
            id: 1, 
            title: "User's name",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            stars : 3,
        },{ 
            id: 1, 
            title: "User's name",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            stars : 5,
        },{ 
            id: 1, 
            title: "User's name",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            stars : 3,
        },{ 
            id: 1, 
            title: "User's name",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            stars : 3,
        },{ 
            id: 1, 
            title: "User's name",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            stars : 3,
        },{ 
            id: 1, 
            title: "User's name",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            stars : 3,
        }
    ];

    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    const chunkedData = chunkArray(cardData, 3);

    return(
        <div>
            <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Feedbacks</p>
                <h1 className="primary-heading"><center>What our costumers say about us </center></h1>
                </div>
            </div>
            <div className="feedbacks">
            <Carousel style={{ controlColor: '#8f50ec' }}>
            {chunkedData.map((chunk, index) => (
                <Carousel.Item key={index}>
                    <div className="feedbacks">
                        <Row xs={1} md={3} className="g-3">
                            {chunk.map(card => (
                                <Col className="feedback" key={card.id}>
                                    <div className="bulle"><h6>"{card.content}"</h6></div>
                                    <div className="user">
                                        <div><AccountCircleIcon sx={{ color: "#776bcc", fontSize: 50 }} /></div>
                                        <div className="userName">
                                            <h5>{card.title}</h5>
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
