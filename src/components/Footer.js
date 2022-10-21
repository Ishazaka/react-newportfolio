import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon5.svg";
import navIcon3 from "../assets/img/nav-icon6.svg";
import github from '../assets/img/github.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <div className="footer-logo">
            <h1 className="navbar-logoo">ISHA</h1>
            </div>
       
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a rel="noreferrer noopener" target='_blank' href="https://www.linkedin.com/in/isha-z/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a rel="noreferrer noopener" target='_blank' href="https://github.com/Ishazaka">
                <img src={github} alt="Icon" />
              </a>
              <a target='_blank' href="mailto:ishazaka1010@gmail.com">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
