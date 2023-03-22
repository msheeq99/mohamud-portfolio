import React from "react";
import RR from "../assets/img/rr.png";
import Jate from "../assets/img/jate.png";
import NoteTaker from "../assets/img/note-taker.png";
import wds from "../assets/img/wds.png";
import apiquiz from "../assets/img/apiquiz.png";
import pgen from "../assets/img/pgen.png";
import tpg from "../assets/img/tpg.png";
import rollerRide from "../assets/img/rollerRide.png"

import "./Projects.css";

const Portfolio = () => {
  return (
    <div id="portfolio" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="row">
              <div className="col-sm-12">
                <h2>Portfolio</h2>
                <br />
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <a href="https://shrouded-woodland-67381.herokuapp.com/">
                    <img src={RR} className="img-fluid" alt="1Life" />
                    <h6>Interactive Full-Stack Application</h6>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <a href="https://ms-texteditor.herokuapp.com/">
                    <img src={Jate} className="img-fluid" alt="Jate" />
                    <h6>Progressive Web Applications (PWA): Text Editor</h6>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <a href="https://ms-note-taker.herokuapp.com/">
                    <img
                      src={NoteTaker}
                      className="img-fluid"
                      alt="Express.js: Note Taker"
                    />
                    <h6>Express.js: Note Taker</h6>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <a href="https://msheeq99.github.io/work-day-scheduler/">
                    <img
                      src={wds}
                      className="img-fluid"
                      alt="Third-Party APIs: Work Day Scheduler"
                    />
                    <h6>Third-Party APIs: Work Day Scheduler</h6>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <a href="https://msheeq99.github.io/web-apis-codequiz/">
                    <img
                      src={apiquiz}
                      className="img-fluid"
                      alt="Web APIs: Code Quiz"
                    />
                    <h6>Web APIs: Code Quiz</h6>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec">
                  <a href="https://msheeq99.github.io/javascript-password-gen/">
                    <img
                      src={pgen}
                      className="img-fluid"
                      alt="JavaScript: Password Generator"
                    />
                    <h6>JavaScript: Password Generator</h6>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec">
                  <a href="https://github.com/msheeq99/oop-team-profile ">
                    <img
                      src={tpg}
                      className="img-fluid"
                      alt="Object-Oriented Programming: Team Profile Generator"
                    />
                    <h6>Object-Oriented Programming: Team Profile Generator</h6>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec">
                  <a href="https://roller-coaster4.herokuapp.com/home">
                    <img
                      src={rollerRide}
                      className="img-fluid"
                      alt="RollerRide"
                    />
                    <h6>MERN Stack Single-Page Application</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
