import React, { useState } from "react";
import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contact.css";

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

    emailjs.sendForm("service_vasgvuh", "template_5lanzb7", "#contactForm", "W9qnIsOH_vTz1TdIH").then(
      function (response) {
        console.log(response.text);
        setFormMessage("Message sent");
      },
      function (error) {
        console.log(error.text);
        setFormMessage(
          "Your message could not be sent. Please try again or email Noah directly @noahschwartz@live.com"
        );
      }
    );
  }

  return (
    <div className="formBg">
      <div className="formContainer">
        <h1>Contact Me</h1>
      </div>
      <Form id="contactForm">
        <Form.Group controlId="name">
          <Form.Label className="label">Name :</Form.Label>
          <Form.Control
            className="input"
            required
            name="name"
            onBlur={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label className="label">Email :</Form.Label>
          <Form.Control
            className="input"
            required
            type="email"
            name="email"
            onBlur={handleChange}
          />
        </Form.Group>

        {formMessage && (
          <div>
            <p className="formMessage">{formMessage}</p>
          </div>
        )}

        <Form.Group controlId="message">
          <Form.Label className="label">Message :</Form.Label>
          <Form.Control
            className="input"
            required
            name="message"
            as="textarea"
            rows="5"
            onBlur={handleChange}
          />
        </Form.Group>
        <div className="submit">
          <Button onSubmit={sendMessage} className="btn input" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Contact;
