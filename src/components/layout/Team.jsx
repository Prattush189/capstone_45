import React from "react";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      name: "Kshitij Chhabariya",
      role: "Team Member",
      photo: "https://i.ibb.co/ys97NcZ/Whats-App-Image-2024-11-26-at-11-15-50-PM.jpg", // Replace with actual photo URL
    },
    {
      name: "Anant Agarwal",
      role: "Team Member",
      photo: "https://i.ibb.co/CnzhC4G/Whats-App-Image-2024-11-26-at-11-21-43-PM.jpg", // Replace with actual photo URL
    },
    {
      name: "Tanmay Wasson",
      role: "Team Member",
      photo: "https://teamfateh.com/photos/team_2023/Tanmay_Wasson.png", // Replace with actual photo URL
    },
    {
      name: "Prattush Jain",
      role: "Team Member",
      photo: "https://media.licdn.com/dms/image/v2/D5603AQGiK6wNXuCuYA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725507874573?e=1738195200&v=beta&t=jqtFcaLzdmtMtCyr6hhCvyFpi72LYtxzHXpt11A08OM", // Replace with actual photo URL
    },
  ];

  const mentors = [
    {
      name: "Sandeep Kumar Sharma",
      role: "Mentor",
      photo: "https://i.ibb.co/xY9bb8z/Whats-App-Image-2024-11-26-at-9-31-22-PM.jpg", // Replace with actual photo URL
    },
    {
      name: "Vishal Gupta",
      role: "Mentor",
      photo: "https://i.ibb.co/2sGPM9S/Whats-App-Image-2024-11-26-at-9-31-51-PM.jpg", // Replace with actual photo URL
    },
  ];

  return (
    <div className="team-container">
      <h1 className="team-title">Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h2 className="team-name">{member.name}</h2>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>

      <h1 className="team-title">Our Mentors</h1>
      <div className="team-grid">
        {mentors.map((mentor, index) => (
          <div className="team-card" key={index}>
            <img src={mentor.photo} alt={mentor.name} className="team-photo" />
            <h2 className="team-name">{mentor.name}</h2>
            <p className="team-role">{mentor.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
