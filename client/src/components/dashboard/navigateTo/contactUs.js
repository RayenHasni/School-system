import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Paper from "@mui/material/Paper";


const Contact = () => {

  const [name] = useState('');
  const [CIN] = useState('');
  const [subject] = useState('');
  const [message] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, CIN, subject, message });
  };

  return (
    <Paper style={{display:'flex',justifyContent:'center', flexDirection: 'column', alignItems:'center',height:'70vh',marginTop:'3vh',padding:'3vh'}}>
      <Container style={{width:'700px',}}>
        <h1>Get In Touch</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group style={{marginTop:'3vh'}} controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Name"
              value={name}
            />
          </Form.Group>

          <Form.Group style={{marginTop:'2vh'}} controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="CIN"
              value={CIN}
            />
          </Form.Group>

          <Form.Group style={{marginTop:'2vh'}} controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Select
              type="text"
              placeholder="CIN"
              value={CIN}
            >
              <option value="help">Help</option>
              <option value="error">Report</option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group style={{marginTop:'2vh'}} controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={message}
            />
          </Form.Group>

          <Button style={{justifyContent:'center',width:'150px',marginTop:'3vh'}} variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </Container>
    </Paper>
  );
}
export default Contact;