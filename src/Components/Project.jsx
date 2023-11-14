import React, { useState } from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import project1 from "../asset/projects-1-nutr.jpg";
import project2 from "../asset/projects-1-porto.jpg";
import iconp2 from "../asset/project-2-icon.svg";
import iconp1 from "../asset/project-1-icon.svg";
import CustomPopup from "./Popup";

export default function CustomProject() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <div className="project-box">
              <h2>Projects</h2>
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                className="carousel-projects"
              >
                <Carousel.Item>
                  <div className="card-projects">
                    <a href="#" className="overlay-link"></a>
                    <img src={project1} alt="nutr" />
                    <div className="overlay">
                      <h2>Nutr.</h2>
                      <h3>UI/UX Design</h3>
                      <Button
                        variant="primary"
                        onClick={() => setModalShow1(true)}
                        className="btn-clickdetails"
                      >
                        Click for details
                      </Button>
                      <CustomPopup
                        show={modalShow1}
                        onHide={() => setModalShow1(false)}
                        title="Nutr."
                        content="NUTR is an AI-powered mobile app that scans and delivers detailed nutritional information from food scans, making healthy choices easy for users. 
My role in the project is UI/UX Designer"
                        imageSrc={project1}
                        imageSrc2={iconp1}
                        link="https://www.behance.net/gallery/171131449/Nutr"
                      />
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="card-projects">
                    <a href="#" className="overlay-link"></a>
                    <img src={project2} alt="portoweb" />
                    <div className="overlay">
                      <h2>Portofolio Web</h2>
                      <h3>Front End Web</h3>
                      <Button
                        variant="primary"
                        onClick={() => setModalShow2(true)}
                        className="btn-clickdetails"
                      >
                        Click for details
                      </Button>
                      <CustomPopup
                        show={modalShow2}
                        onHide={() => setModalShow2(false)}
                        title="Portofolio Web"
                        content=""
                        imageSrc={project2}
                        imageSrc2={iconp2}
                        link="https://github.com/Siberuz/portoweb"
                      />
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
