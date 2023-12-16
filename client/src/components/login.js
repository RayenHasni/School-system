import { Form, Button } from 'react-bootstrap';

function LoginForm() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Status</Form.Label>
        <Form.Control as="select">
          <option>Parent</option>
          <option>Admin</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>CIN</Form.Label>
        <Form.Control type="text" placeholder="Enter CIN" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
