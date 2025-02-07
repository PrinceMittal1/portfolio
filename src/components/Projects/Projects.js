import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import skoobimg from "../../Assets/skoobimg.png";
import mindpeimg from "../../Assets/mindpe-quiz-app-logo.avif";
import additonalimgskoob1 from "../../Assets/WhatsApp1.jpeg";
import additonalimgskoob2 from "../../Assets/WhatsApp2.jpeg";
import additonalimgskoob3 from "../../Assets/WhatsApp3.jpeg";
import additonalimgskoob4 from "../../Assets/WhatsApp4.jpeg";
import additonalimgskoob7 from "../../Assets/WhatsApp7.jpeg";
import additonalimgskoob5 from "../../Assets/WhatsApp5.jpeg";
import additonalimgskoob6 from "../../Assets/WhatsApp6.jpeg";
import additonalimgskoob8 from "../../Assets/WhatsApp8.jpeg";

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
        <Col  className="project-card">
            <ProjectCard
              mainImgPath={skoobimg}
              additionImgPath1={additonalimgskoob5}
              additionImgPath2={additonalimgskoob6}
              additionImgPath3={additonalimgskoob7}
              additionImgPath4={additonalimgskoob8}
              isBlog={false}
              time={"1 April 2024 - present"}
              techStack={"React-Native, FastAPI, PostgreSQL, gCloud."}
              langStack={"JavaScript, Python."}
              description={"Skoob.ai is an amazing platform for the book lovers, where they can read and listen to amazing stories."}
              responsibilities={[
                "Building and implementing application solutions.",
                "Improving and maintaining feature functionality.",
                "Integrating external APIs and libraries into applications.",
                "Managing and developing backend functionalities."
              ]}
              whatIDid={[
                "Independently managed the front-end development.",
                "Developing key features and improving user experience.",
                "Optimizing application performance.",
                "Making app crash free.",
              ]}
              additionalImages={[
                "path/to/screenshot2.jpg",
                "path/to/screenshot2.jpg",
                "path/to/screenshot3.jpg"
              ]}
              iosLink="https://apps.apple.com/us/app/skoob-podcasts-based-on-books/id6473138854"
              androidLink="https://play.google.com/store/apps/details?id=com.skoobai&hl=en_IN"
            />
          </Col>

          <Col  className="project-card">
            <ProjectCard
              mainImgPath={mindpeimg}
              additionImgPath1={additonalimgskoob1}
              additionImgPath2={additonalimgskoob2}
              additionImgPath3={additonalimgskoob3}
              additionImgPath4={additonalimgskoob4}
              isBlog={false}
              time={"1 April 2023 - 5 Feb 2024"}
              techStack={"React-Native, Xcode, Android Studio."}
              langStack={"Javascript, Typescript."}
              description={"Mindpe is a live quiz platform where your performance decides your rank, which in turn determines your reward."}
              responsibilities={[
                "Building and implementing application solutions.",
                "Improving and maintaining feature functionality.",
                "Integrating google analytics and notification.",
                "Integrating external api and library.",
                "Debugging the application."
              ]}
              whatIDid={[
                "Built the react-native application for both iOS and Android.",
                "Independently managed the front-end development.",
                "Developing key features and improving user experience.",
                "Optimizing application performance.",
                "Making app crash free.",
              ]}
              additionalImages={[
                "../../Assets/WhatsApp1.jpeg",
                "../../Assets/WhatsApp2.jpeg",
                "../../Assets/WhatsApp3.jpeg",
                "../../Assets/WhatsApp4.jpeg"
              ]}
              iosLink="not availbale"
              androidLink="not availbale"
            />
          </Col>
        {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
