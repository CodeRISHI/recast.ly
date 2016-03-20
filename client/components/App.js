class App extends React.Component {
  constructor(props) {
    super(props);
    this.debouncedSearch = _.debounce(searchYouTube, 400, {leading: true});
    this.state = {
      searchTerm: null,
      playerVideo: {
        'kind': '',
        'etag': '',
        'id': {
          'kind': '',
          'videoId': ''
        },
        'snippet': {
          'publishedAt': '',
          'channelId': '',
          'title': 'Video is loading, please wait.',
          'description': 'No video loaded!',
          'thumbnails': {
            'default': {
              'url': '',
              'width': '',
              'height': ''
            },
            'medium': {
              'url': '',
              'width': '',
              'height': ''
            },
            'high': {
              'url': '',
              'width': '',
              'height': ''
            }
          },
          'channelTitle': '',
          'liveBroadcastContent': ''
        }
      },
      listVideo: [{
        'kind': '',
        'etag': '',
        'id': {
          'kind': '',
          'videoId': ''
        },
        'snippet': {
          'publishedAt': '',
          'channelId': '',
          'title': '',
          'description': '',
          'thumbnails': {
            'default': {
              'url': '',
              'width': '',
              'height': ''
            },
            'medium': {
              'url': '',
              'width': '',
              'height': ''
            },
            'high': {
              'url': '',
              'width': '',
              'height': ''
            }
          },
          'channelTitle': '',
          'liveBroadcastContent': ''
        }
      }]
    };
  }

  onVideoClick (videoID) {
    this.setState({
      playerVideo: videoID
    });
  }

  componentDidMount() {
    console.log('searchTerm, from componentDidMount ', this.state.searchTerm);

    searchYouTube({
      query: this.state.searchTerm, 
      max: 10, 
      key: YOUTUBE_API_KEY
    }, 
    (data) => {
      // console.log('apidata =', data);
      this.setState({listVideo: data.items, playerVideo: data.items[0]});
    });
  }

  liveSearch(keyPress) {
    console.log('keyPress ', keyPress);
    // console.log('searchTerm ', keyPress.target.value);
    this.setState({searchTerm: keyPress});
    this.debouncedSearch({
      query: keyPress,
      max: 10, 
      key: YOUTUBE_API_KEY
    }, 
    (data) => {
      console.log('apidata =', data);
      this.setState({listVideo: data.items, playerVideo: data.items[0]});
    });
  }

  render () {
    var that = this;
    return (
      <div>
        <Nav liveSearch={this.liveSearch} that={that} />
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

// window.ytTEST = searchYouTube({key: YOUTUBE_API_KEY}, function() {
//   console.log('HI THERE BUDDY!');
// });
