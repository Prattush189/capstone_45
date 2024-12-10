import React from "react";

const partsData = [
  {
    id: 1,
    name: "MY1016Z2 EBIKE Brush Motor",
    description: "Provides precise, adjustable resistance to mimic tennis shot mechanics.",
    specifications: {
      power: "250W",
      torque: "0.8 N.m (8.15 kg-cm)",
      speed: "0-360 RPM",
      voltage: "24V DC",
      Full_load_Current: "13.4A",
      No_load_Current: "≤2.2A",
      control: "PWM (Pulse Width Modulation)",
    },
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQHxyFdgjlPRlO3iC0E8WICy5uISg10g5tMJRugM0AKGlZHZywB", 
  },
  {
    id: 2,
    name: "Pulley System",
    description: "Designed to handle dynamic loads while providing smooth resistance.",
    specifications: {
      material: "Aluminum Alloy",
      diameter: "5 in",
      loadCapacity: "50 kg",
      bearings: "Ball bearings for low friction",
    },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRTAHvkdpnW_TqnpaameXdOWFrDq2dEvDPiw&s", 
  },
  {
    id: 3,
    name: "Steel build wire",
    description: "Ensures durability and low stretch during high-tension exercises.",
    specifications: {
      material: "Nylon",
      diameter: "5 mm",
      length: "30ft",
    },
    image: "https://m.media-amazon.com/images/I/71+2VBj3HSL.jpg", 
  },
  // {
  //   id: 4,
  //   name: "Load Cells",
  //   description: "Measures string tension for real-time feedback and performance tracking.",
  //   specifications: {
  //     type: "S-Type Load Cell",
  //     capacity: "50 kg",
  //     accuracy: "±0.02%",
  //     output: "2 mV/V",
  //   },
  //   image: "/images/loadcell.jpg", // Replace with actual image path
  // },
  {
    id: 5,
    name: "Arduino",
    description: "Processes inputs and controls motor adjustments for adaptive resistance.",
    specifications: {
      model: "Arduino Mega 2560 & UNO",
      clockSpeed: "16 MHz",
      operatingVoltage: "5V",
      ioPins: "54 digital, 16 analog / 14, with 6 providing PWM output ",
      communication: "UART, SPI, I2C",
    },
    image: "https://m.media-amazon.com/images/I/71z22cRPeeL._AC_UF1000,1000_QL80_.jpg", // Replace with actual image path
  },
  {
    id: 6,
    name: "Frame",
    description: "Lightweight and durable, providing stability during use.",
    specifications: {
      material: "Mild Steel",
      weight: "5 kg",
      dimensions: "500 x 300 x 400 mm",
      finish: "Paint",
    },
    image: "https://i.ibb.co/HqT7xkJ/Whats-App-Image-2024-11-12-at-1-24-14-AM-2.jpg", // Replace with actual image path
  },
  // {
  //   id: 7,
  //   name: "Sensors (e.g., Encoder)",
  //   description: "Tracks motor position to ensure resistance accuracy.",
  //   specifications: {
  //     type: "Incremental Rotary Encoder",
  //     resolution: "2000 pulses per revolution",
  //     operatingVoltage: "5-24V",
  //     output: "A/B Quadrature",
  //   },
  //   image: "/images/sensors.jpg", // Replace with actual image path
  // },
];

const Parts = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Parts Used</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {partsData.map((part) => (
          <div
            key={part.id}
            style={{
              width: "300px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            <img
              src={part.image}
              alt={part.name}
              style={{ width: "100%", height: "300x", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h2 style={{ fontSize: "20px", margin: "10px 0" }}>{part.name}</h2>
              <p style={{ fontSize: "14px", color: "#555" }}>{part.description}</p>
              <h3 style={{ fontSize: "16px", margin: "10px 0", color: "#333" }}>Specifications:</h3>
              <ul style={{ textAlign: "left", fontSize: "14px", color: "#555", padding: "0 20px" }}>
                {Object.entries(part.specifications).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parts;
