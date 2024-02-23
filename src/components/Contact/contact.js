import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Microsoft from '../../assets/microsoft.png';
import Adobe from '../../assets/adobe.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_es34txd', 'template_2p154ea', form.current, 'Ws0o8xbh_BZYz6s73')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('email sent');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientsDesc">i have had the oppurtunity to work with a diverse group of companies. some of the notable companies i have worked with includes</p>
            <div className="clientsImg">
                <img src={Walmart} alt="Walmart" className="clientImg" />
                <img src={Microsoft} alt="Microsoft" className="clientImg" />
                <img src={Adobe} alt="Adobe" className="clientImg" />
                <img src={Facebook} alt="Facebook" className="clientImg" />
            </div>
        </div>
        <div id="contactPage">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">please fill out the form to discuss any work oppurtunity</span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='your name' name='from_name' />
            <input type="email" className="email" placeholder='your email' name='from_email' />
            <textarea name="message" className="msg" cols="5" rows="5" placeholder='your message'></textarea>
            <button type='submit' value="send" className="submitBtn">Submit</button>
            <div className="links">
              <img src={FacebookIcon} alt="FacebookIcon" className="link" />
              <img src={TwitterIcon} alt="TwitterIcon" className="link" />
              <img src={YoutubeIcon} alt="YoutubeIcon" className="link" />
              <img src={InstagramIcon} alt="InstagramIcon" className="link" />
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact;