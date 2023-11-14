import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import githublogo from "../asset/github-logo.svg";
import behancelogo from "../asset/behance-logo.svg";
import linkedinlogo from "../asset/linkedin-logo.svg";

export default function CustomFooter() {
  return (
    <section className="footer">
      <Container>
        <Col className="content-footer">
          <Col className="row-social">
            <div className="item1">
              <a href="https://github.com/Siberuz" id="githuba">
                <img src={githublogo} alt="github-logo" />
              </a>
            </div>
            <div className="item1">
              <a
                href="https://www.linkedin.com/in/fairuz-firnanda-arianto/"
                id="linkeda"
              >
                <img src={linkedinlogo} alt="linkedin-icon" />
              </a>
            </div>
            <div className="item1" id="behancea">
              <a href="https://www.behance.net/fairuzfirnand2">
                <img src={behancelogo} alt="behance-icon" />
              </a>
            </div>
          </Col>
          <Row>
            <h1>Fairuz.</h1>
          </Row>
          <Row>
            <h6>
              © 2023 <span className="boldtext">Fairuz Firnanda Arianto </span>
              All Rights Reserved , Inc.
            </h6>
          </Row>
        </Col>
      </Container>
    </section>
  );
}
