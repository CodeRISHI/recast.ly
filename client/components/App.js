class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerVideo: exampleVideoData[0],
      listVideo: exampleVideoData
    };
  }

  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.playerVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.listVideo} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
