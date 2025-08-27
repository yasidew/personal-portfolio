import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/html-icon.svg";
import meter2 from "../assets/img/c++-icon.svg";
import meter3 from "../assets/img/css-icon.svg";
import meter4 from "../assets/img/java-icon.svg";
import meter5 from "../assets/img/javascript-programming-language-icon.svg";
import meter6 from "../assets/img/react-icon.svg";
import meter7 from "../assets/img/sql-icon.svg";
import meter8 from "../assets/img/firebase-icon.svg";
import meter9 from "../assets/img/mongodb-icon.svg";
import meter10 from "../assets/img/spring-boot-icon.svg";
import meter11 from "../assets/img/kotlin-icon.svg";
import meter12 from "../assets/img/visual-studio-code-icon.svg";
import meter13 from "../assets/img/adobe-xd-icon.svg";
import meter14 from "../assets/img/intellij-idea-icon.svg";
import meter15 from "../assets/img/bootstrap-4-icon.svg";
import meter16 from "../assets/img/oracle-icon.svg";
import postgre from "../assets/img/postgresql-icon.svg"
import aws from "../assets/img/aws.svg";
import angular from "../assets/img/angularjs.svg";
import docker from "../assets/img/docker.svg"


import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
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
            <div className="skill-bx">
              <h2>Tools And Technologies</h2>
              <p>Explore the tools and technologies I employ to bring ideas to life and achieve remarkable results.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="" />
                  <h5>JAVA</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={angular} alt="" />
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <img src={aws} alt="" />
                  <h5>AWS</h5>   
                </div>
                <div className="item">
                  <img src={docker} alt="" />
                  <h5>Docker</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={postgre} alt="" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={meter9} alt="" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={meter10} alt="" />
                  <h5>SpringBoot</h5>
                </div>
                <div className="item">
                  <img src={meter12} alt="" />
                  <h5>VS Code</h5>
                </div>
                <div className="item">
                  <img src={meter14} alt="" />
                  <h5>Intellij IDEA</h5>
                </div>
                <div className="item">
                  <img src={meter15} alt="" />
                  <h5>Bootstrap</h5>
                </div>
              </Carousel>
              
               
              
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};

export default Skills;
