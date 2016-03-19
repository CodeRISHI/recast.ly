class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerVideo: exampleVideoData[0],
      listVideo: exampleVideoData
    };
  }

  onVideoClick (videoID) {
    this.setState({
      playerVideo: videoID
    });
  }

  render () {
    var that = this;
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.playerVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.listVideo} onVideoClick={this.onVideoClick} that={that} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
window.ytTEST = searchYouTube({key: YOUTUBE_API_KEY}, function() {
  console.log('HI THERE BUDDY!');
});
