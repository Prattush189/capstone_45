import React, { useState, useEffect } from 'react';

// Helper function to get video files and their titles
const getVideoFiles = () => {
  return [
    { filename: "3dprint.mp4", title: "Pulley 3D print " },
    { filename: "turning.mp4", title: "Pulley Turing" },
    { filename: "var_res.mp4", title: "Dynamic Resistaance Control" },
    { filename: "levels.mp4", title: "5 level indication through LCD" },
    { filename: "frame_weld.mp4", title: "Frame welding" },
  ];
};

const FabTest = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Set videos on component mount
    const videoFiles = getVideoFiles();
    setVideos(videoFiles);
  }, []);

  return (
    <div>
      <h1>Video Gallery</h1>
      <div className="video-gallery">
        {videos.length > 0 ? (
          videos.map((video, index) => (
            <div key={index} className="video-container">
              <video width="600" controls>
                <source
                  src={`http://localhost:3000/videos/${video.filename}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <h3>{video.title}</h3> {/* Title for the video */}
            </div>
          ))
        ) : (
          <p>No videos available.</p>
        )}
      </div>
    </div>
  );
};

export default FabTest;
