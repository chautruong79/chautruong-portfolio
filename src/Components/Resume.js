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
            <ul>
              {education.descriptions.map((des) => {
                return <li>{des}</li>;
              })}
            </ul>
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
            <ul>
              {work.descriptions.map((des) => {
                return <li>{des}</li>;
              })}
            </ul>
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
                  <span className="sk">Programming: </span>
                  <em className="border">Javascript</em>
                  {"  "}
                  <em className="border">Node.Js</em>
                  {"  "}
                  <em className="border">Ruby</em>
                  {"  "}
                  <em className="border">C/C++</em>
                </li>
                <li>
                  <span className="sk">Web – Frontend: </span>
                  <em className="border">React</em>
                  {"  "}
                  <em className="border">Redux</em>
                  {"  "}
                  <em className="border">Webpack</em>
                  {"  "}
                  <em className="border">HTML5</em>
                  {"  "}
                  <em className="border">CSS3</em>
                </li>
                <li>
                  <span className="sk">Web – Backend: </span>
                  <em className="border">Express with Node.JS</em>
                </li>
                <li>
                  <span className="sk">Database: </span>
                  <em className="border">Postgres</em>
                  {"  "}
                  <em className="border">MongoDB</em>
                </li>
                <li>
                  <span className="sk">Languages: </span>
                  <em className="border">English</em>
                  {"  "}
                  <em className="border">Vietnamese</em>
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
