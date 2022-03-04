import React from "react";

export default function Resume() {
  return (
    <div>
      <p>
        Download my{" "}
        <a
          class="resumeLink"
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/17mnehWUjrbTmkyoPkp65rYgfgf1CtqYF/view?usp=sharing"
          download
        >
          Resume
        </a>
      </p>
      <p>
        I studied with a Full Stack Developer program offered by UCSD. I have
        experience with HTML, CSS, Javascript, Node.js, Express.js, React.js, RESTful APIs. I have 
        also studied Database Design and Implemenation, which includes SQL,
        Sequelize, MongoDB, IndexDB, and Mongoose. I have completed 20 assignments plus 3
        Group Projects that required using every topic covered in the course.
      </p>
      <ul>
        <h4>Front End proficiencies:</h4>
        <li>React.js</li>
        <li>CSS</li>
        <li>Responsive design</li>
        <li>JQuery</li>
        <li>Bootstrap</li>
      </ul>
      <ul>
        <h4>Back End proficiencies:</h4>
        <li>React.js</li>
        <li>SQl, Sequelize</li>
        <li>Mongo, Mongoose</li>
        <li>Express.js</li>
        <li>API's</li>
        <li>Chart.js</li>
      </ul>
    </div>
  );
}