import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "Mininum 3 characters")
    .max(25, "Maximum 25 characters"),
  lastName: Yup.string()
    .min(3, "Mininum 3 characters")
    .max(25, "Maximum 25 characters"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  phone: Yup.string().matches(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    "Invalid Phone Number"
  ),
  message: Yup.string().required("Message is Required"),
});

export const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const form = useRef();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: () => {
      setButtonText("Sending...");
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            formik.resetForm();
            setStatus({
              success: true,
              data: result,
              message: "Message sent successfully",
            });
          },
          (error) => {
            setStatus({
              success: false,
              data: error,
              message: "Something went wrong, please try again later.",
            });
          }
        );

      setButtonText("Send");
    },
  });

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={formik.handleSubmit} ref={form}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formik.values.firstName}
                          placeholder="First Name"
                          onChange={formik.handleChange}
                        />
                        {formik.errors.firstName && (
                          <small>{formik.errors.firstName}</small>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formik.values.lastName}
                          placeholder="Last Name (optional)"
                          onChange={formik.handleChange}
                        />
                        {formik.errors.lastName && (
                          <small>{formik.errors.lastName}</small>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formik.values.email}
                          placeholder="Email Address *"
                          onChange={formik.handleChange}
                        />
                        {formik.errors.email && (
                          <small>{formik.errors.email}</small>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formik.values.phone}
                          placeholder="Phone No. (optional)"
                          onChange={formik.handleChange}
                        />
                        {formik.errors.phone && (
                          <small>{formik.errors.phone}</small>
                        )}
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          id="message"
                          name="message"
                          value={formik.values.message}
                          placeholder="Message *"
                          onChange={formik.handleChange}
                        ></textarea>
                        {formik.errors.message && (
                          <small>{formik.errors.message}</small>
                        )}
                      </Col>
                      <Row size={12} className="px-1">
                        {status.message && (
                          <Col>
                            <p
                              className={
                                status.success === false ? "danger" : "success"
                              }
                            >
                              {status.message}
                            </p>
                          </Col>
                        )}
                        <button type="submit" style={{ marginLeft: 10 }}>
                          <span>{buttonText}</span>
                        </button>
                      </Row>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
