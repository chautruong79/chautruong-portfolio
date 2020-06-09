import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="row skill">
              <ul className="skills">
                <li>
                  <span>Programming: </span>
                  <em>Javascript, Node.Js, Ruby, C/C++ </em>
                </li>
                <li>
                  <span>Web – Frontend: </span>
                  <em>React, Redux, Webpack, HTML5, CSS3</em>
                </li>
                <li>
                  <span>Web – Backend: </span>
                  <em>Express with Node.JS</em>
                </li>
                <li>
                  <span>Database: </span>
                  <em>Postgres, MongoDB </em>
                </li>
                <li>
                  <span>Languages: </span>
                  <em>English, Vietnamese</em>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
