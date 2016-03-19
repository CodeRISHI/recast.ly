class VideoList extends React.Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    return (
      <div className="video-list media">
        {prop.videos.map(video => 
            <VideoListEntry video={video} />
        )}
      </div>
    );
  }
}

window.VideoList = VideoList;