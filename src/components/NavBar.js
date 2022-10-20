import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon5.svg";
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
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
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
                <a href="/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="/">
                  <img src={github} alt="" />
                </a>
                <a href="/">
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
