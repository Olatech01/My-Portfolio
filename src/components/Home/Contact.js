import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <section className='contact'>
        <Form onSubmit={handleSubmit} className='form' style={{paddingBottom: 15}}>
            <Form.Label className='hire'>Hire Me</Form.Label>
            <Form.Group controlId="formName">
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                className='input'
                value={formData.name}
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="formEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                className='input'
                value={formData.email}
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="formMessage">
                {/* <Form.Label>Message</Form.Label> */}
                <Form.Control
                as="textarea"
                className='input'
                rows={3}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </section>
  );
};

export default ContactForm;
