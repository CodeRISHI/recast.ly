var VideoPlayer = (prop) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + prop.video.id.videoId + "?autoplay=1"} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{prop.video.snippet.title}</h3>
      <div>{prop.video.snippet.description}</div>
    </div>
  </div>
);

window.VideoPlayer = VideoPlayer;
