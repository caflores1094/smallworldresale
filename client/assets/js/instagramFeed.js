//MINE: 
//access token: 277051249.1677ed0.3b8492fbe87c4d8baeb0e51c035890c1
//My userID: 277051249

//Small World's ID:
// userId: '1678137649'
//client id: 8064044d15684adcb204217687052c6f
//access token: 1678137649.1677ed0.a10b2f17721f40298228b30c79d4c01d


var userFeed = new Instafeed({
  get: 'user',
  userId: '1678137649',
  accessToken: '1678137649.1677ed0.a10b2f17721f40298228b30c79d4c01d',
  limit: 16,
  resolution: 'standard_resolution'
});
userFeed.run();

var loadButton = document.getElementById('load-more');
loadButton.addEventListener('click', function() {
  userFeed.next();
});
