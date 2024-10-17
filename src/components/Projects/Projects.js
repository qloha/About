import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import smoothmath from "../../Assets/Projects/smoothmath.png";
import randomstr from "../../Assets/Projects/randomstr.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smoothmath}
              isBlog={false}
              title="SmoothMath"
              description="SmoothMath is a Python package designed to simplify mathematical operations and provide a smooth experience for developers."
              ghLink="https://github.com/qloha/SmoothMath"
              demoLink="https://qloha.github.io/smoothmath"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={randomstr}
                isBlog={false}
                title="RandomStr"
                description="Generates a random string of your length choice."
                ghLink="https://github.com/qloha/RandomStr"
                demoLink="https://qloha.github.io/randomstr"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
