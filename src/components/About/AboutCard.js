import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", lineHeight:"40px" }}>
            Hi Everyone, I am <span className="purple">Prince Mittal </span>
            from <span className="purple"> Banglore, India.</span>
            <br />
            I am currently employed as a front-end developer at skoob.ai.
            <br />
            Apart from coding, some other activities that I love to do :
          </p>
          <ul style={{marginTop:"-18px"}}>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
