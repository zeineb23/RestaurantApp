import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  "../CSS/feedbacks.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarIcon from '@mui/icons-material/Star';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";


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

    return(
        <div>
            <div className="title">
                <h3><b>Feedbacks</b></h3>
                <h6><i>Here's what our costumers had to say about us </i></h6>
            </div>
            <div className="feedbacks">
            <Row xs={1} md={3} className="g-3">
                {cardData.map(card => (
                    <Col className="feedback" key={card.id}>
                        <div className="bulle">"{card.content}"</div>
                        <div className="user">
                            <div><AccountCircleIcon sx={{ color: "#8f50ec" , fontSize: 50 }} /></div>
                            <div  className="userName">
                                <h6><b>{card.title}</b></h6> 
                                {[...Array(card.stars)].map((_, index) => (
                                    <StarIcon key={index} style={{ color: 'gold' }} />
                                ))}
                            </div>
                        </div>
                    </Col>
            ))}
            </Row>
            </div>
</div>
    );       
    
}
