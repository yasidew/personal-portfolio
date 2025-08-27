import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon5.svg";
import navIcon3 from "../assets/img/nav-icon4.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-row align-items-end">
          <Col sm={5}>
            
          </Col>
          <Col sm={7} className="text-center text-sm-end">
            <div className="social-icon mt-4">
              <a href="https://www.linkedin.com/in/yasitha-dewmin/">
                <img src={navIcon1} />
              </a>
              <a href="https://twitter.com/Yas_de_">
                <img src={navIcon2} />
              </a>
              <a href="https://github.com/yasidew">
                <img src={navIcon3} />
              </a>
            </div>
            {/* <p>&copy; 2023 Yasitha Dewmin. All Rights Reserved.</p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
