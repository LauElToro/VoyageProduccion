import React, { useState, useEffect, useRef } from "react";
import jersey from "../imagenes/jersey.jpg";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import "./videoplayer.css";

function VideoPlayer() {
  const videos = ["fOW8Y09GVek", "AY5qcIq5u2g", "H4tyzzP33Cw", "DsXMR7dY35w"];
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const playerRef = useRef(null);

  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
    setShowPlayButton(false);
  };

  const playSelectedVideo = () => {
    const player = playerRef.current;
    if (player && player.getPlayerState() !== 1) {
      player.playVideo();
    }
  };

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, []);

  return (
    <div className="video-total-container">
      <div className="title-videos">The Videos</div>
      <div className="subtitle-videos">
        Check out our hottest videos. View more and share more new perspectives
        on just about any topic. Everyones welcome.
      </div>
      <div className="videos-container">
        <div className="youtube-container">
          <LiteYouTubeEmbed
            id={selectedVideo}
            iframeRef={(r) => (playerRef.current = r)}
          />
        </div>
        <div>
          {videos.map((videoId) => (
            <div className="links-video" key={videoId}>
              <img
                key={videoId}
                src={jersey}
                alt=""
                className="img-video"
                onClick={() => handleVideoClick(videoId)}
              />
              <div
                className="play-button"
                onClick={() => handleVideoClick(videoId)}
                key={videoId}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-play-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
                    className="icon-video"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
