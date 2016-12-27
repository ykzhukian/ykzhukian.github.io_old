//= require instafeed.min

// This is where it all goes :)
var loadButton = document.getElementById('load-more');
var feed = new Instafeed({
  get: 'user',
  tagName: 'VSCO',
  userId: '411688063',
  accessToken: '411688063.1677ed0.b3558c060d6a494bb28ff21b4dc7cbd5',
  resolution: 'low_resolution'

});
feed.run();