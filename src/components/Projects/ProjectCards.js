import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
// import ;
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {

  const handleDownloadClick = () => {
    alert("The application is no longer available as the startup has been closed.");
  };

  const handleLinkClick = (link) => {
    if (link === "not availbale") {
      handleDownloadClick();
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <Card className="project-card-view">
      {/* Main Image */}
      <Card.Img variant="top" src={props.mainImgPath} alt="main-app-img" style={{width:300, height:300, alignSelf:'center'}} />
      <Card.Body>
        {/* App Title */}
        <Card.Title>{props.title}</Card.Title>
        
        <Card.Text style={{ textAlign: "justify" }}>
          <strong>Time : </strong> {props?.time}
        </Card.Text>

        <Card.Text style={{ textAlign: "justify" }}>
          <strong>About the App: </strong> {props?.description}
        </Card.Text>
        
        <Card.Text style={{ textAlign: "justify" }}>
          <strong>Tech Used: </strong> {props?.techStack}
        </Card.Text>
        
        <Card.Text style={{ textAlign: "justify" }}>
          <strong>Languages Used:</strong> {props?.langStack}
        </Card.Text>

        <div className="additional-responsibilities" style={{ marginLeft: "20px", padding: 0 }}>
          <h1>My responsibilities</h1>
          <ul style={{ margin: 0, padding: 0, listStyleType: "disc", textAlign: "left" }}>
            {props?.responsibilities && props?.responsibilities.map((item, index) => (
              <li key={index} style={{ marginBottom: "5px", textAlign: "left" }}>
                <strong>{item}</strong>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="additional-responsibilities" style={{ marginLeft: "20px", padding: 0 }}>
          <h1>My Areas of Contribution</h1>
          <ul style={{ marginRight: "20px", padding: 0, listStyleType: "disc", textAlign: "left" }}>
            {props?.whatIDid && props?.whatIDid.map((item, index) => (
              <li key={index} style={{ marginBottom: "5px", textAlign: "left",}}>
                <strong>{item}</strong>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="additional-images">
            <Card.Img variant="top" src={props.additionImgPath1} alt="main-app-img" style={{width:300, height:600, alignSelf:'center'}} />
            <Card.Img variant="top" src={props.additionImgPath2} alt="main-app-img" style={{width:300, height:600, alignSelf:'center'}} />
            <Card.Img variant="top" src={props.additionImgPath3} alt="main-app-img" style={{width:300, height:600, alignSelf:'center'}} />
            <Card.Img variant="top" src={props.additionImgPath4} alt="main-app-img" style={{width:300, height:600, alignSelf:'center'}} />
        </div>
        
        <div className="download-buttons">
            {props.iosLink && (
              <Button
                variant="outline-primary"
                onClick={() => handleLinkClick(props.iosLink)} // Call the function on click
                style={{ marginRight: "10px" }}
              >
                <FaAppStore /> &nbsp; iOS Download
              </Button>
            )}
            {props.androidLink && (
              <Button
                variant="outline-primary"
                onClick={() => handleLinkClick(props.androidLink)} // Call the function on click
              >
                <FaGooglePlay /> &nbsp; Android Download
              </Button>
            )}
          </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

