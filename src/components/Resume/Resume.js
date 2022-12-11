import React from "react";
import "./Resume.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool, MdScience } from "react-icons/md";
import { BiCoffeeTogo } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";

function Resume() {
  return (
    <div>
      <h1 className="resume">My Resume</h1>
      <div className="resume">
        <div>
          My cover letter/short bio will go here.
          <p>
            <a href="https://www.linkedin.com/in/noahschwartz99/">
              <BsLinkedin />
            </a>
          </p>
          <div className='downloadContainer'>
                <button className='downloadBtn'><a className='download' href={require(`../../assets/images/Resume.png`)} target="_blank" download>Download My Resume</a></button>
            </div>
        </div>
      </div>
      <div className="event">.
        <VerticalTimeline lineColor="#2f3868">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022"
            iconStyle={{ background: "#2f3868", color: "white" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              UW Full-Stack Coding Bootcamp
            </h3>
            <p>Front end and back end skills, primarily in </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017-2021"
            iconStyle={{ background: "#2f3868", color: "white" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Tufts University
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Medford, MA</h4>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>Bachelor's Degree in Biology</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021-2022"
            iconStyle={{ background: "#2f3868", color: "white" }}
            icon={<MdScience />}
          >
            <h3 className="vertical-timeline-element-title">
              Azenta Life Sciences
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Cambridge, MA
            </h4>
            <p>Research Assistant</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020-2022"
            iconStyle={{ background: "#2f3868", color: "white" }}
            icon={<BiCoffeeTogo />}
          >
            <h3 className="vertical-timeline-element-title">
              Davis Square Donuts and Bagels
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Somerville, MA
            </h4>
            <p>Barista</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Resume;
