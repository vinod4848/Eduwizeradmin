import React, { useState } from "react";

const UploadYouTubeVideo = ({ editData, uploadVideoProp }) => {
  const [videoUrl, setVideoUrl] = useState(editData ? editData.url : "");
  const [videoType, setVideoType] = useState(editData ? editData.fileType : "");

  const handleVideoUrlChange = (e) => {
    const url = e.target.value;
    // Extract video ID from YouTube URL (assuming it's a standard YouTube URL)
    const videoIdMatch = url.match(/[?&]v=([^?&]+)/);
    const videoId = videoIdMatch ? videoIdMatch[1] : null;

    if (videoId) {
      // Assuming you want to set the video type as "youtube" for YouTube videos
      setVideoType("youtube");
      setVideoUrl(`https://www.youtube.com/watch?v=${videoId}`);
    } else {
      // Reset video type and URL if the URL is not valid
      setVideoType("");
      setVideoUrl("");
    }
  };

  return (
    <div>
      <label>YouTube Video URL:</label>
      <input
        type="text"
        placeholder="Enter YouTube video URL"
        value={videoUrl}
        onChange={handleVideoUrlChange}
      />
      {videoType === "youtube" && (
        <p>
          Video Type: <strong>YouTube</strong>
        </p>
      )}
      <button
        type="button"
        onClick={() => {
          if (videoType === "youtube") {
            uploadVideoProp(null, videoUrl, videoType);
          }
        }}
      >
        Upload YouTube Video
      </button>
    </div>
  );
};

export default UploadYouTubeVideo;
