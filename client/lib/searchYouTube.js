var searchYouTube = (options, callback) => {
  var updatedOptions = {
    query: options.query || 'mclaren p1 gtr',
    max: options.max || 5,
    key: options.key
  };
  
  var youtubeURL = 'https://www.googleapis.com/youtube/v3/search?' + 
    'part=snippet' +
    '&maxResults=' + updatedOptions.max +
    '&q=' + updatedOptions.query + // do we need to process this string?
    '&type=video' +
    '&videoEmbeddable=true' + 
    '&vq=hd1080' +
    '&key=' + updatedOptions.key;

  // TODO
  $.ajax({
    url: youtubeURL,
    type: 'GET',
    data: 'jsonp',
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
