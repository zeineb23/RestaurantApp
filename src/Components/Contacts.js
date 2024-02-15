import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../CSS/contact.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Contact() {
    return (
        <div className="container">
            <div className="item">
                <div className="contact">
                    <div className="first-text">
                    <b>Let's get in touch</b>
                    </div>
                    <img alt="img" src="https://media.viskan.com/v2/vitalplusprod/normal/kundtjanst.jpg" className="image"/>
                    <div className="social-links">
                        <span className="second-text">Connect with us:</span>
                        <ul className="social-media">
                            <li><FacebookIcon  sx={{ color: "#FFFFFF" }} fontSize="large"/></li>
                            <li><InstagramIcon sx={{ color: "#FFFFFF" }} fontSize="large"/></li>
                            <li><YouTubeIcon sx={{ color: "#FFFFFF" }} fontSize="large"/></li>
                        </ul>
                    </div>
                </div>
                <div className="submit-form">
                    <h4><b>Contact Us</b></h4>
                    <form action="">
                        <div class="input-box">
                            <input type="text" className="input" required/>
                            <label>Name</label>
                        </div>
                        <div class="input-box">
                            <input type="email" className="input" required/>
                            <label>Mail</label>
                        </div>
                        <div class="input-box">
                            <input type="phone" className="input" required/>
                            <label>Phone</label>
                        </div>
                        <div class="input-box">
                            <textarea id="message" className="input" cols="25" rows="5" required></textarea>
                            <label>Message</label>
                        </div>
                        <input type="submit" className="btn "value="Submit"/>
                    </form>
                </div>
                
            </div>
            
        </div>
      );
    }
    
export default Contact;