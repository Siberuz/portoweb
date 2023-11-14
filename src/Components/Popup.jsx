import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";

export default function CustomPopup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        className="header-popup"
        data-bs-theme="dark"
      ></Modal.Header>
      <Modal.Body className="body-popup">
        <Row>
          <Col>
            <div>
              <img
                src={props.imageSrc}
                alt={props.title}
                className="popup-img"
              />
            </div>
          </Col>
          <Col className="col-content">
            <div className="custom-title d-flex justify-content-between align-items-center">
              {props.title}
              <img src={props.imageSrc2} alt={props.title} className="icon-2" />
            </div>
            <div className="custom-content mt-1">{props.content}</div>
            <div className="button-site mt-2">
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                <Button className="popup-button">Go to Project</Button>
              </a>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
