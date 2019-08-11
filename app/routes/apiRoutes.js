var friendsData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var close_match = [];
    friendsData.forEach(friend => {
      var diff = 0;
      for (var i = 0; i <= 9; i++) {
        diff += Math.abs(friend.scores[i] - req.body.scores[i]);
      }
      close_match.push([friend, diff]);
    });
    close_match.sort(function(a, b) {
      return a[1] - b[1];
    });
    console.log(close_match[0]);
    //friendsData.push(req.body);
    res.json(close_match[0]);
  });
};
