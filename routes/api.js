const express = require("express");
const router = express.Router();
const { Request } = require("tedious");
const azure = require("../db/azure.js");

const connection = azure;

function login(username, password) {
  const string1 = "SELECT * FROM Users WHERE Username = '";
  const string2 = "' AND Password = '";
  const string3 = "';";
  const SQL = string1.concat(username, string2, password, string3);
  const request = new Request(SQL, err => {
    if (err) {
      console.error(err.message);
    }
  });
  request.on("doneInProc", function(rowCount, more, rows) {
    console.log(rowCount);
    count = rowCount;
  });

  connection.execSql(request);
  console.log(count);
  if (count > 0) return true;
  else return false;
}

router.post("/login", (req, res) => {
  const string1 = "SELECT * FROM Users WHERE Username = '";
  const string2 = "' AND Password = '";
  const string3 = "';";
  const SQL = string1.concat(
    req.body.username,
    string2,
    req.body.password,
    string3
  );
  const request = new Request(SQL, err => {
    if (err) {
      console.error(err.message);
    }
  });

  request.on("doneInProc", function(rowCount, more, rows) {
    if (rowCount > 0) {
      res.json({
        mess: "true"
      });
    } else {
      res.json({
        mess: "false"
      });
    }
  });
  connection.execSql(request);
});

router.post("/createAccount", (req, res) => {
  const string1 = "INSERT INTO Users(Username, Password) VALUES ('";
  const string2 = "','";
  const string3 = "');";
  const SQL = string1.concat(
    req.body.username,
    string2,
    req.body.password,
    string3
  );
  const request = new Request(SQL, err => {
    if (err) {
      console.error(err.message);
      res.json({
        mess: "failed"
      });
    } else {
      res.json({
        mess: "success"
      });
    }
  });
  connection.execSql(request);
});
module.exports = router;
