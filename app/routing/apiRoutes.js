var express = require("express");
var friendsData = require("../data/friends");


var app = express();

module.exports = function(app) {


    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        console.log("Data posted.....")
      });

    }