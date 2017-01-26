// access_token: 277051249.fa47645.cf32f131bc1c4e14a65ada28e6ec2e97
// client ID: fa476458fa6642bcacb7de11a279ab84
var feed = new Instafeed({
  get: 'user',
  userId: [user_id],
  accessToken: '[accessToken]',
  resolution: 'low_resolution',
  filter: function(image) {
    return image.tags.indexOf('somehashtag') >= 0;
  }
});
feed.run();