import { Button, Col, Container, Row } from 'react-bootstrap';
import './Header.css'


const Header = () => {
    return (
        <div>
            <Container className="hero-content">
                <Row>
                    <Col>
                        <h1>Welcome to Our Website</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                        </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Header;