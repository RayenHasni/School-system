import { Form, Button } from 'react-bootstrap';

function RegistrationForm() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" placeholder="Enter Nom" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Prenom</Form.Label>
        <Form.Control type="text" placeholder="Enter Prenom" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email (not required)</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Telephone</Form.Label>
        <Form.Control type="tel" placeholder="Enter Telephone" />
      </Form.Group>

      <Form.Group>
        <Form.Label>CIN</Form.Label>
        <Form.Control type="text" placeholder="Enter CIN" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
}

export default RegistrationForm;