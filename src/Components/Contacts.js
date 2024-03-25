import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../CSS/contact.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import emailjs from 'emailjs-com';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const serviceID = "service_zjzs7fc";
    const templateID = "template_7m45qzp";
    const userID = "lno5vJXVhn8-gkSL1";

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const templateParams = {
          from_name: name,
          from_email: email,
          number: phone,
          message: message,
        };
    
        emailjs.send(serviceID, templateID, templateParams, userID)
          .then((response) => {
             console.log('SUCCESS!');
             alert('Your message was sent successfully !');
             setName('');
             setEmail('');
             setMessage('');
             setPhone('');
          }, (err) => {
             console.log('FAILED...', err);
             alert('There was an error sending your message, please try again later.');
          });
      };

    return (
        <div className="container">
        <div className="container-contact">
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
                    <h4 className="titleContact"><b>Contact Us</b></h4>
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input type="text" className="input" required value={name} onChange={(e) => setName(e.target.value)}/>
                            <label>Name</label>
                        </div>
                        <div className="input-box">
                            <input type="email" className="input" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <label>Mail</label>
                        </div>
                        <div className="input-box">
                            <input type="phone" className="input" required value={phone} onChange={(e) => setPhone(e.target.value)}/>
                            <label>Phone</label>
                        </div>
                        <div className="input-box">
                            <textarea id="message" className="input" cols="25" rows="5" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            <label>Message</label>
                        </div>
                        <input type="submit" className="btn" value="Submit"/>
                    </form>
                </div>
                
            </div>
            </div>
        </div>
      );
    }
    
export default Contact;
