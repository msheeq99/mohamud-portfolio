import React from "react";

import NoteTaker from "../images/note-taker.png";
import RR from "../images/rr.png";
import TextEditor from "../images/text-editor.png";

export default function project() {
  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">
            Recent <span>Projects</span>
          </h1>
        </div>

        <div className="project-item">
          <div className="project-info">
            <h1>Note Taker</h1>
            <h2>Self Project</h2>
            <p>
              This web application is a note taker using HTML, CSS, JavaScript,
              node.js & express.js. You are presented with a homepage, when
              pressing the button at the center of the page you are taken to the
              note taker page. This page allows you to type in a note and save
              it to the front end and back end. This application has been
              created to demonstrate my skills in connecting the front end to
              the back end using express.js & node.js.This project was built to
              showcase my abilities within the backend using node.js &
              express.js. The note becomes saved into the backend
              <br />
              <br />
              Technologies used:
              <br />
              #Html / #Css / #Javascript / #Express.JS / #Node.JS
            </p>
          </div>
          <div className="project-img">
            <a href="https://ms-note-taker.herokuapp.com/">
              <img src={NoteTaker} alt="img" />
            </a>
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
            <h1>Rthym Rater</h1>
            <h2>Group Project</h2>
            <p>
              Rhythm Rater is a website that contains music searching and
              comment function. Once logged in to your account, you are able to
              search your favorite music and comment it below. <br />
              <br />
              Technologies used:
              <br />
              #Html / #Css / #Javascript / #SQL / #Sequilize / #Handlebars /
              #Express.JS / #Node.JS
            </p>
          </div>
          <div className="project-img">
            <a href="https://shrouded-woodland-67381.herokuapp.com/">
              <img src={RR} alt="img" />
            </a>
          </div>
        </div>
        <div className="project-item">
            <div className="project-info">
              <h1>Progressive Web Applications (PWA): Text Editor</h1>
              <h2>Self Project</h2>
              <p>
              This is a text editor application created in the UW Coding Bootcamp. The text editor runs in a browser and can be installed on a computer. It utilizes webpack, service-worker, express, javascript, css, and html.
                <br />
                <br />
                Technologies used:
                <br />
                #Html / #Css / #Javascript
              </p>
            </div>
            <div className="project-img">
              <a href="https://ms-texteditor.herokuapp.com/">
                <img src={TextEditor} alt="img" />
              </a>
            </div>
          </div>

      </div>
      
    </section>
  );
}
