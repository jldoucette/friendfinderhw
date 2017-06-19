var path = require("path");
var friends=require("../data/friends.js");

var friendsapi= function(app) {

  app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

 app.post("/api/friends", function(req, res) {
  var newcandidate = req.body;
  var candidate=[];

  candidate.push(newcandidate);

    var lowestScore=[];

    for (var m=0; m<friends.length; m++) {
      
        var diffCalc=0;
    
        for (var i = 0; i < friends[m].scores.length; i++) {
              diffCalc+=Math.abs(friends[m].scores[i]-candidate[0].scores[i]);
            }
            lowestScore.push(diffCalc);
      }

    var closestMatchIndex=lowestScore.indexOf(Math.min.apply(null,lowestScore));
    var closestMatchName=friends[closestMatchIndex];
    
    res.json(closestMatchName);
    });
}
module.exports=friendsapi;



