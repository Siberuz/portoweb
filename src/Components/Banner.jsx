import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import githublogo from "../asset/github-logo.svg";
import behancelogo from "../asset/behance-logo.svg";
import linkedinlogo from "../asset/linkedin-logo.svg";
import homeimg from "../asset/header-foto.svg";
import cv2 from "../document/cv2.pdf";

export default function CustomBanner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const textGanti = ["Front End Developer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const textWaktu = 2000;

  useEffect(() => {
    let tickerInterval = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(tickerInterval);
    };
  }, [text]);

  const tick = () => {
    let index = loopNum % textGanti.length;
    let fullText = textGanti[index];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(textWaktu);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container className="align-items-center">
        <Row className="row mx-0">
          <Col xs={12} md={5} xl={6} className="order-md-1">
            <h1>
              {"Hi, I'm Fairuz"}
              <br />
              {text}
            </h1>
            <p>
              I'm <span className="bold-text">Fairuz Firnanda Arianto</span>, a
              fifth-semester Computer Science student at Bina Nusantara
              University. I'm deeply passionate about
              <span className="bold-text"> Front-end Development </span>
              and
              <span className="bold-text"> UI/UX Design</span>, and I've been
              actively pursuing this interest through relevant courses and
              hands-on projects. With a proven track record in completing
              projects and effective communication, I am confident that my
              skills and motivation will contribute to the success of my future
              endeavors.
            </p>
            <div className="button-cv">
              <a href={cv2} target="blank">
                <button>Download CV</button>
              </a>
            </div>
            <div className="icon-social">
              <a href="https://github.com/Siberuz">
                <img src={githublogo} alt="github-icon" className="github" />
              </a>
              <a href="https://www.linkedin.com/in/fairuz-firnanda-arianto/">
                <img
                  src={linkedinlogo}
                  alt="linkedin-icon"
                  className="linkedin"
                />
              </a>
              <a href="https://www.behance.net/fairuzfirnand2">
                <img src={behancelogo} alt="behance-icon" className="behance" />
              </a>
            </div>
          </Col>
          <Col
            xs={12}
            md={7}
            xl={6}
            className="order-md-2 d-flex align-items-center justify-content-center"
            style={{ marginTop: "-100px" }}
          >
            <img src={homeimg} alt="home-img" className="img-home"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
