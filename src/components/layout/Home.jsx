import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Slideshow Section */}
      <section className="slideshow">
      <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Left Section: About the Product */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          textAlign: "left",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Tennis-Specific Muscle Training Device
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          Our innovative muscle training device is designed specifically for tennis players. It uses a motor-controlled resistance system to replicate tennis shot mechanics, targeting underutilized muscle groups. This device helps players enhance strength, improve performance, and reduce injury risks with sport-specific muscle training.
        </p>
      </div>

      {/* Right Section: Product Image */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://i.ibb.co/C2N9mRf/Whats-App-Image-2024-11-28-at-3-45-59-AM.jpg" // Replace with your actual product image path
          alt="Tennis Training Device"
          style={{
            width: "80%",
            maxWidth: "500px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
        Together, we are dedicated to revolutionizing sports training through precision-engineered devices, 
        helping athletes achieve their full potential while addressing gaps in traditional training methodologies. 
        Our current project, the Tennis-Specific Muscle Training Device, is a testament to our commitment to 
        bridging the gap between engineering innovation and athletic excellence.
        </p>
        <a href="/about" className="btn btn-secondary">Learn More</a>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Sports-Specific Training Solutions</h3>
            <p>We design and develop innovative training devices tailored to the specific needs of athletes, focusing on improving performance, enhancing muscle strength, and reducing injury risks.</p>
          </div>
          <div className="service-item">
            <h3>Customizable Resistance Technology</h3>
            <p>Our advanced motor-controlled systems allow athletes to customize resistance levels, providing precise and dynamic training that replicates real-world movements and shot mechanics.</p>
          </div>
          <div className="service-item">
            <h3>Research-Driven Development</h3>
            <p>Backed by extensive research in sports science and engineering, our solutions are designed to address gaps in traditional training methods, ensuring athletes receive cutting-edge tools for optimized performance.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
