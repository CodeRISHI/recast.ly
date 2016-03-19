var VideoList = (prop) => {
  return (
    <div className="video-list media">
      {prop.videos.map(video => 
          <VideoListEntry video={video} onVideoClick={prop.onVideoClick} that={prop.that} />
      )}
    </div>
  );
};

window.VideoList = VideoList;
