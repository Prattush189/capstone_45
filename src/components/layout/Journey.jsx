import React from "react";
import "./Journey.css";

const Journey = () => {
  const journeyData = [
    {
      year: "Jan 2024",
      title: "Foundation",
      description: "Our journey began as a group of enthusiastic mechanical engineering students, passionate about applying engineering principles to solve real-world challenges.",
    },
    {
      year: "Mar 2024",
      title: "Ideation",
      description: "Brainstormed ideas to address gaps in traditional sports training methods and conceptualized a device for tennis-specific muscle training.",
    },
    {
      year: "May 2024",
      title: "Research & Development",
      description: "Extensively researched sports science, resistance mechanisms, and relevant patents. Collaborated with mentors and tested initial prototypes.",
    },
    {
      year: "Sep 2024",
      title: "Prototype and Testing",
      description: "Built and tested the first working prototype of our Tennis-Specific Muscle Training Device, gathering valuable feedback from players and experts.",
    },
    {
      year: "Nov 2024",
      title: "Launch",
      description: "Preparing to present our innovative device to the world, aiming to revolutionize tennis training and expand to other sports.",
    },
  ];

  return (
    <div className="journey-container">
      <h1 className="journey-title">Our Journey</h1>
      <div className="timeline">
        {journeyData.map((milestone, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-year">{milestone.year}</div>
            <div className="timeline-content">
              <h2 className="timeline-title">{milestone.title}</h2>
              <p className="timeline-description">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
