import React from "react";
import RR from "../assets/img/rr.png";
import Jate from "../assets/img/jate.png";
import NoteTaker from "../assets/img/note-taker.png";
import wds from "../assets/img/wds.png";
import apiquiz from "../assets/img/apiquiz.png";
import pgen from "../assets/img/pgen.png";
import tpg from "../assets/img/tpg.png";
import rollerRide from "../assets/img/rollerRide.png";

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
                   <img src={RR} className="img-fluid" alt="1Life" />
                    <h6>Interactive Full-Stack Application</h6>
                    <a
                      data-aos="fade-up"
                      role="button"
                      href="https://github.com/Lacko3006/all-albums-all-genres"
                      className="btn btn-primary"
                    >
                      github
                    </a>
                    <a
                      data-aos="fade-up"
                      role="button"
                      href="https://github.com/Lacko3006/all-albums-all-genres"
                      className="btn btn-primary"
                    >
                        Live page
                    </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                    <img src={Jate} className="img-fluid" alt="Jate" />
                    <h6>Progressive Web Applications (PWA): Text Editor</h6>
                    <a
                      data-aos="fade-up"
                      role="button"
                      a href="https://github.com/msheeq99/text-editor"
                      className="btn btn-primary"x
                    >
                      github
                    </a>
                    <a
                      data-aos="fade-up"
                      role="button"
                      a href="https://ms-texteditor.herokuapp.com/"
                      className="btn btn-primary"
                    >
                        Live page
                    </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                    <img
                      src={NoteTaker}
                      className="img-fluid"
                      alt="Express.js: Note Taker"
                    />
                    <h6>Express.js: Note Taker</h6>
                    <a
                      data-aos="fade-up"
                      role="button"
                      href="https://github.com/msheeq99/expressjs-note-taker"
                      className="btn btn-primary"
                    >
                      github
                    </a>
                    <a
                      data-aos="fade-up"
                      role="button"
                      href="https://ms-note-taker.herokuapp.com/"
                      className="btn btn-primary"
                    >
                        Live page
                    </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                    <img
                      src={wds}
                      className="img-fluid"
                      alt="Third-Party APIs: Work Day Scheduler"
                    />
                    <h6>Third-Party APIs: Work Day Scheduler</h6>
                    <a
                      data-aos="fade-up"
                      role="button"
                      href="https://github.com/msheeq99/work-day-scheduler"
                      className="btn btn-primary"
                    >
                      github
                    </a>
                    <a
                      data-aos="fade-up"
                      role="button"
                      href="https://msheeq99.github.io/work-day-scheduler/"
                      className="btn btn-primary"
                    >
                        Live page
                    </a>
                  
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                    <img
                      src={apiquiz}
                      className="img-fluid"
                      alt="Web APIs: Code Quiz"
                    />
                    <h6>Web APIs: Code Quiz</h6>
                    <a
                      data-aos="fade-up"
                      type="Github"
                      a href="https://github.com/msheeq99/web-apis-codequiz"
                      className="btn btn-primary"
                    >
                      github
                    </a>
                    <a
                      data-aos="fade-up"
                      type="Live"
                      a href="https://msheeq99.github.io/web-apis-codequiz/"
                      className="btn btn-primary"
                    >
                        Live page
                    </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec">
                    <img
                      src={pgen}
                      className="img-fluid"
                      alt="JavaScript: Password Generator"/>
                    <h6>JavaScript: Password Generator</h6>
                    <a
                      data-aos="fade-up"
                      type="button"
                      a href="https://github.com/msheeq99/javascript-password-gen"
                      className="btn btn-primary"
                    >
                      github
                    </a>
                    <a
                      data-aos="fade-up"
                      type="button"
                      a href="https://msheeq99.github.io/javascript-password-gen/"
                      className="btn btn-primary"
                    >
                        Live page
                    </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec">
                    <img
                      src={tpg}
                      className="img-fluid"
                      alt="Object-Oriented Programming: Team Profile Generator"
                    />
                    <h6>Object-Oriented Programming: Team Profile Generator</h6>
                    <a
                      data-aos="fade-up"
                      type="Github"
                      a href="https://github.com/msheeq99/oop-team-profile"
                      className="btn btn-primary"
                    >
                      github
                    </a>
                    <a
                      data-aos="fade-up"
                      type="Live"
                      a href="https://msheeq99.github.io/oop-team-profile/"
                      className="btn btn-primary"
                    >
                        Live page
                    </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec">
                    <img
                      src={rollerRide}
                      className="img-fluid"
                      alt="RollerRide"
                    />
                    <h6> MERN Stack Single-Page Application</h6>
                    <a
                      data-aos="fade-up"
                      role="button"
                      href="https://github.com/HusaamNT/reactRollerRide"
                      className="btn btn-primary"
                    >
                      github
                    </a>
                    <a
                      data-aos="fade-up"
                      role="button"
                      href="https://roller-coaster4.herokuapp.com/home"
                      className="btn btn-primary"
                    >
                        Live page
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
