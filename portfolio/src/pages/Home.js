import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Mohammad Farman</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS,Redux, HTML, CSS, React Native,NPM,
              @uiIcons, BootStrap, MaterialUI, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
             Basically NodeJS,MySQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C,C++,JavaScript, </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;