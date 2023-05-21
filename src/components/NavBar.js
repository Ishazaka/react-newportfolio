import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon5.svg";
import coding from '../assets/img/coding.gif'
import navIcon3 from "../assets/img/nav-icon6.svg";
import github from "../assets/img/github.png";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container className="nav-con">
        <img style={{width: '90px' , borderRadius: '50%' , marginRight: '20px'}} src={coding} alt="Logo" />
          <Navbar.Brand href="#home">
       <h1 className="navbar-logoo">ISHA</h1>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                style={{ marginTop: "1vh", marginBottom: "1vh" }}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                style={{ marginTop: "1vh", marginBottom: "1vh" }}
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#products"
                className={
                  activeLink === "products"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                style={{ marginTop: "1vh", marginBottom: "1vh" }}
                onClick={() => onUpdateActiveLink("products")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span
              className="navbar-text"
              style={{ marginTop: "1vh", marginBottom: "1vh" }}
            >
              <div className="social-icon">
                <a rel="noreferrer noopener" target='_blank' href="https://www.linkedin.com/in/isha-zz/">
                  <img src={navIcon1} alt="" />
                </a>
                <a rel="noreferrer noopener" target='_blank' href="https://github.com/Ishazaka">
                  <img src={github} alt="" />
                </a>
                <a rel="noreferrer noopener" target='_blank' href="mailto:ishazaka1010@gmail.com">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1vh",
                marginBottom: "1vh",
              }}
            >
              <HashLink to="#connect">
                <button className="vvd navbar-text-button">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
