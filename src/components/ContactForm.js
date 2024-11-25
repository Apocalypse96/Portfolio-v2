import React, { useRef } from 'react';
import './ContactFormStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import cartoon from '../images/contact.png';

export default function ContactForm({ id }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm('service_ln5dywx', 'template_ydh3rxu', form.current, 'Sen3R8DXrxzvgwSEl')
      .then((result) => {
          console.log(result.text);
          toast.success('Message sent successfully.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
      }, (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Kindly refresh the page.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
      });
  };

  return (
    <div className='contact-window' id={id}>
      <h1>Let's Get in Touch.</h1>
      <p>Discuss a project or just want to say Hi? My inbox is open for all. Connect with me on Mail</p>
      <div className="contact-container">
        <img src={cartoon} alt='Aayush Khopade' className="contact-wrapper-left"></img>        
        <form ref={form} onSubmit={sendEmail} className="contact-wrapper-right">
          <input id='name' type="text" name="user_name" placeholder='Full Name' required />
          <input id='email' type="email" name="user_email" placeholder='Email ID' required />
          <textarea id='message' name="message" rows='5' column='15' placeholder='Share your thoughts and insights here your feedback means a lot.' required />
          <button className='btn' id='submitBtn' type="submit" value="Send">Send Message</button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
