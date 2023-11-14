import React from "react";
import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import htmlicon from "../asset/logos_html-5.svg";
import csslicon from "../asset/logos_css-3.svg";
import javascriptlicon from "../asset/logos_javascript.svg";
import bootstrapicon from "../asset/logos_bootstrap.svg";
import figmaicon from "../asset/logos_figma.svg";
import reacticon from "../asset/logos_react.svg";

export default function CustomSkills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <Carousel
                className="skills-slider"
                swipeable={true}
                draggable={true}
                ssr={true}
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={1000}
                customTransition="all .5"
                transitionDuration={500}
              >
                <div className="item" id="html">
                  <img src={htmlicon} alt="html-icon" />
                  <h5>Intermediate</h5>
                </div>
                <div className="item" id="css">
                  <img src={csslicon} alt="css-icon" />
                  <h5>Intermediate</h5>
                </div>
                <div className="item" id="javasc">
                  <img src={javascriptlicon} alt="javascript-icon" />
                  <h5>Beginner</h5>
                </div>
                <div className="item" id="bootstrap">
                  <img src={bootstrapicon} alt="bootsrap-icon" />
                  <h5>Beginner</h5>
                </div>
                <div className="item" id="figma">
                  <img src={figmaicon} alt="figma-icon" />
                  <h5>Intermediate</h5>
                </div>
                <div className="item" id="react">
                  <img src={reacticon} alt="react-icon" />
                  <h5>Beginner</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
