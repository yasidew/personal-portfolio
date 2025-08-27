import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.jpg";
import ch from "../assets/img/ch.png"
import Auth from "../assets/img/auth.jpg"
import Lms from "../assets/img/Lms.png"
import Ar from "../assets/img/Ar.png"
import ccmt from "../assets/img/ccmt.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "CodeHarbor",
      description: "AI-powered code analysis Tool",
      imgUrl: ch,
      projectURL: "https://github.com/yasidew/Codeharbor-2.0",
    },
    {
      title: "Authentication Module",
      description: "Microservice Authentication Module with CI/CD and Dockerized Deployment",
      imgUrl: Auth,
      projectURL: "https://github.com/yasidew/AuthService",
    },
    {
      title: "EduLoom",
      description: "Microservice Learning Management System",
      imgUrl: Lms,
      projectURL: "https://github.com/yasidew/ds-edustack-main",
    },
    {
      title: "CCMT",
      description: "Code Complexity Measuring Tool",
      imgUrl: ccmt,
      projectURL: "https://github.com/SLIITITP/ITP_WE_B01_TW_14",
    },
    {
      title: "AR Project",
      description: "MARKER-BASED AUGMENTED REALITY PARK SCENE",
      imgUrl: Ar,
      projectURL: "https://github.com/yasidew/AR-Project",
    },
    {
      title: "Southern Agro Serve (Pvt) Ltd",
      description:"Business management system for Southern Agro Serve (Pvt) Ltd",
      imgUrl: projImg1,
      projectURL: "https://github.com/SLIITITP/ITP_WE_B01_TW_14",
    },
    {
      title: "FinTrack",
      description:
        "Mobile Application to manage finances and track income and expenses",
      imgUrl: projImg2,
      projectURL: "https://github.com/yasidew/FinTrack",
    },
    {
      title: "Online Pet Care System",
      description: "Web Application to manage pet care services",
      imgUrl: projImg3,
      projectURL: "https://github.com/yasidew/Online-Pet-Care-System",
    },
    {
      title: "Online Grocery Ordering System",
      description:
        "Web application to seamlessly manage services provided by a grocery store",
      imgUrl: projImg4,
      projectURL: "https://github.com/yasidew/OneStop",
    },
    {
      title: "TheCodingTrio",
      description: "We build Pat Projects",
      imgUrl: projImg5,
      projectURL: "https://github.com/TheCodingTrio",
    },
    /*{
      title: "Title",
      description: "Description",
      imgUrl: projImg1,
      projectURL: "URL",
    },*/
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Discover a collection of innovative projects showcasing my
                    expertise in developing custom solutions. From business
                    management systems to mobile apps and web applications, each
                    project embodies creativity and cutting-edge technology
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {/* {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })} */}
                    {projects.slice(0, 6).map((project, index) => (
                      <ProjectCard key={`p1-${index}`} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.slice(6, 12).length > 0 ? (
                      projects
                        .slice(6, 12)
                        .map((project, idx) => (
                          <ProjectCard key={`p2-${idx}`} {...project} />
                        ))
                    ) : (
                      <p>No more projects to show yet.</p>
                    )}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Row>
                  {projects.slice(12, 18).length > 0 ? (
                    projects
                      .slice(12, 18)
                      .map((project, idx) => (
                        <ProjectCard key={`p3-${idx}`} {...project} />
                      ))
                  ) : (
                    <p>No more projects to show yet.</p>
                  )}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="colorSharp2"
      />
    </section>
  );
};

export default Projects;
