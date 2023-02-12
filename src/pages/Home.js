import React from "react";
import LinkedIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css"

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="about">
          <h2>Hi,My Name is Shubham</h2>
          <div className="prompt">
            <p>
              I'm a MERN stack developer with a passion for learning and
              creating.
            </p>
            <LinkedIcon />
            <EmailIcon />
            <GithubIcon />
          </div>
        </div>
        <div className="skills">
          <h1> Skills</h1>
          <ol className="list">
            <li className="item">
              <h2>Front-End</h2>
              <span>ReactJS, HTML, CSS, NPM, MaterialUI,</span>
            </li>
            <li className="item">
              <h2>Back-End</h2>
              <span>
                NodeJS, ExpressJS, MongoDB, AWS S3, Redies , GitHub , Postman
              </span>
            </li>
            <li className="item">
              <h2>Languages</h2>
              <span>JavaScript</span>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Home;
