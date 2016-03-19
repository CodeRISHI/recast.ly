var searchYouTube = (options, callback) => {
  var youtubeURL = 'https://www.googleapis.com/youtube/v3/' + 
    'part=snippet' +
    '&maxResults=5' +
    '&q=cats' +
    '&type=video' +
    '&videoEmbeddable=true';
  var youtubeURL2 = 'https://gdata.youtube.com/feeds/api/videos?' +
    'q=football+-soccer' +
    '&orderby=published' +
    '&start-index=11' +
    '&max-results=10' +
    '&v=3';

  var updatedOptions = {
    query: options.query || 'cats',
    max: options.max || 5,
    key: options.key
  };

  console.log(youtubeURL2 + '&key=' + updatedOptions.key);
  // TODO
  $.ajax({
    url: youtubeURL2 + '&key=' + updatedOptions.key,
    type: 'GET',
    success: function(data) {
      console.log(data);
      console.log('SUCCESS: It worked!');
      callback(data);
    },
    error: function(data) {
      console.log('ERROR: It did not work!');
    }
  });
};

window.searchYouTube = searchYouTube;
