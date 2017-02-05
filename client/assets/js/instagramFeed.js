//2nd try
//access token: 277051249.1677ed0.3b8492fbe87c4d8baeb0e51c035890c1
//My userID: 277051249
//Small World's ID:
// userId: '1678137649'

//danielles
//277051249.1677ed0.3b8492fbe87c4d8baeb0e51c035890c1
//userID: 276598389

var userFeed = new Instafeed({
  get: 'user',
  userId: '277051249',
  accessToken: '277051249.1677ed0.3b8492fbe87c4d8baeb0e51c035890c1',
  limit: 40,
  resolution: 'standard_resolution'
});
userFeed.run();
