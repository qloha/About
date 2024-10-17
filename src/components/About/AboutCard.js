import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I am <span className="purple">qloha </span>
            <br />
            I am currently working on learning React and Node.js, and working on getting more advanced at C++
            <br />
            <br />
            Apart from coding, I like to do some other things as well!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn
            </li>
            <li className="about-activity">
              <ImPointRight /> Random Stuff
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Whatever floats your boat"{" "}
          </p>
          <footer className="blockquote-footer">qloha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
