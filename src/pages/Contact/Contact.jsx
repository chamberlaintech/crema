import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="section-padding contact">
      <div className="contact-heading">
        <h2 className="h2-text">Get in Touch</h2>
        <p className="p-text">
          At Crema, we’re all about building connections. Whether you’re
          planning your next visit, curious about our menu, or want to
          collaborate, our team is here to help. Don’t hesitate to reach
          out—we’d love to chat!
        </p>
      </div>
      <div className="contact-content">
        <div className="contact-content-item">
          <h3 className="h3-text">Visit us</h3>
          <p className="p-text">
            Come see us in person! We’re located at the heart of CoffeeVille,
            ready to serve you with a smile.
          </p>
          <div className="contact-content-last">
            <h6 className="menu-heading">Address:</h6>
            <p className="p-text">123 Brew Street, Coffeeville, USA</p>
          </div>
        </div>
        <div className="contact-content-item">
          <h3 className="h3-text">Call us</h3>
          <p className="p-text">
            Prefer a quick chat? Give us a ring—we’re happy to assist!
          </p>
          <div className="contact-content-last">
            <h6 className="menu-heading">Phone:</h6>
            <p className="p-text">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="contact-content-item">
          <h3 className="h3-text">Email us</h3>
          <p className="p-text">
            Got questions or feedback? Drop us a message, and we’ll get back to
            you as soon as possible.
          </p>
          <div className="contact-content-last">
            <h6 className="menu-heading">Email:</h6>
            <p className="p-text">hello@cremacafe.com</p>
          </div>
        </div>
        <div className="contact-content-item">
          <h3 className="h3-text">Follow us</h3>
          <p className="p-text">
            Stay connected and follow our story on social media. Don’t miss out
            on special offers, events, and behind-the-scenes updates!
          </p>
          <div className="contact-content-last">
            <h6 className="menu-heading">Address:</h6>
            <p className="p-text">123 Brew Street, Coffeeville, USA</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <div className="contact-form-heading">
          <h3 className="h3-text">Send Us a Message</h3>
          <p className="p-text">
            Prefer to message us directly? Fill out the form below, and we’ll be
            in touch!
          </p>
        </div>
        <form className="contact-form-content">
          <div className="form-group">
            <label htmlFor="name" className="footer-subheading">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              className="footer-text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="footer-subheading">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="footer-text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject" className="footer-subheading">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Your Subject"
              className="footer-text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="footer-subheading">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              rows="6"
              placeholder="Your Message"
              className="footer-text"
              required
            />
          </div>
          <div className="contact-form-button">
            <button className="button-primary">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
