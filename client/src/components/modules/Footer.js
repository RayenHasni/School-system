import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="mt-auto py-3 bg-light">
      <Container>
        <Row>
          <Col className="text-center">
            <span>&copy; 2023 School System. All rights reserved.</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
