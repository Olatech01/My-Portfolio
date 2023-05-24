import React from "react";
import { Col, Row } from "react-bootstrap";
import {AiOutlineHtml5} from "react-icons/ai"
import {IoLogoCss3} from "react-icons/io"
import {SiBootstrap} from "react-icons/si"
import {
  DiJavascript1,
  DiReact,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <AiOutlineHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <IoLogoCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>

    </Row>
  );
}

export default Techstack;
