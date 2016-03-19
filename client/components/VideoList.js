var VideoList = (prop) => {
  return (
    <div className="video-list media">
      {console.dir(prop)}
      {prop.videos.map(video => 
          <VideoListEntry video={video} />
      )}
    </div>
  );
};

window.VideoList = VideoList;
