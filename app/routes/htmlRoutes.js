var path = require("path");




module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/style", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/style.css"));
  });

  app.get("/image", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/images/friends.jpeg"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
