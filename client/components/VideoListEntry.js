var VideoListEntry = (prop) => {
  return (
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={prop.video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" >{prop.video.snippet.title}</div>
        <div className="video-list-entry-detail">{prop.video.snippet.description}</div>
      </div>
    </div>
  );
};

window.VideoListEntry = VideoListEntry;
