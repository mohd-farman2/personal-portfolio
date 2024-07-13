
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Madan Lal inter college bisauli, Badaun, Uttar Pradesh
          </h3>
          <p> Intermediate School </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            My Cool University, MJPRU(BLY), U.P India
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p>Bechelor's Of Computer Application</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front End Engineer -a software engineer who focuses on what users see and interact with.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            
          </h4>
          <p>Developed the Front end infrastructure for 6 projects.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            As a Fresher
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Discriptions
          </h4>
          <p>
          “I am a recent graduate with a Bachelor’s degree in Computer Science. My coursework focused on software development, and I’m proficient in c, C++, and web development. During my studies, I completed a web application project that streamlined data processing, reducing errors by 20%. I’m excited to apply my skills in a dynamic software development role and contribute to innovative projects.”
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
