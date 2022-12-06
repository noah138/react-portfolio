import React, { useState } from "react";
import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const validateEmail = (email) => {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState("");

  //   error messages for the form
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setFormMessage("Please enter a valid email address");
      } else {
        setFormMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setFormMessage("Please enter an email address");
      } else {
        setFormMessage("");
      }
    }
    if (!formMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  // https://medium.com/geekculture/how-to-send-emails-from-a-form-in-react-emailjs-6cdd21bb4190
  // https://www.emailjs.com/docs/sdk/send-form/

  function sendMessage(e) {
    e.preventDefault();

    emailjs.sendForm("service_vasgvuh", "service_vasgvuh", "#contactForm").then(
      function (response) {
        setFormMessage("Message sent");
      },
      function (error) {
        setFormMessage(
          "Your message could not be sent. Please try again or email Noah directly @noahschwartz@live.com"
        );
      }
    );
  }

  return (
    <Form id="contactForm">
      <Form.Group controlId="name">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          required
          name="name"
          placeholder="your name here"
          onBlur={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Your Email</Form.Label>
        <Form.Control
          required
          type="email"
          name="email"
          placeholder="your email here"
          onBlur={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          required
          name="message"
          as="textarea"
          rows="5"
          placeholder="your message here"
          onBlur={handleChange}
        />
      </Form.Group>

      {formMessage && (
        <div>
          <p className="formMessage">{formMessage}</p>
        </div>
      )}

      <Button onSubmit={sendMessage} className="btn" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
