import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-header">
        <h1>About Sports dynamic fitness solution</h1>
        <p>
        We are Kshitij Chhabariya, Anant Agarwal, Tanmay Wasson, and Prattush Jain, final-year Mechanical Engineering students 
        with a shared passion for innovation and excellence in sports technology. Our academic journey has equipped us with 
        the technical expertise and problem-solving skills necessary to develop groundbreaking solutions that address 
        real-world challenges.
        Guided by our mentors, Sandeep Kumar Sharma and Vishal Gupta, we aim to merge engineering principles with sports 
        science to create advanced training tools that enhance athletic performance. Their invaluable guidance and 
        extensive experience have been instrumental in shaping our approach and refining our project.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
        Together, we are dedicated to revolutionizing sports training through precision-engineered devices, 
        helping athletes achieve their full potential while addressing gaps in traditional training methodologies. 
        Our current project, the Tennis-Specific Muscle Training Device, is a testament to our commitment to 
        bridging the gap between engineering innovation and athletic excellence.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Collaboration:</strong>We believe in the power of teamwork, both within our group and with our mentors and users. Together, we achieve more.</li>
          <li><strong>Innovation:</strong> We strive to push the boundaries of engineering and sports science by creating innovative solutions that address unmet needs in athletic training.</li>
          <li><strong>Continuous Learning:</strong> We embrace every opportunity to learn, grow, and improve—both as individuals and as a team—through research, feedback, and real-world application.</li>
          <li><strong>Integrity:</strong> We uphold honesty and transparency in everything we do, from research and development to communication with users and stakeholders.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
