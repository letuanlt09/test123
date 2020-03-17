const { Connection } = require("tedious");

const config = {
  authentication: {
    options: {
      userName: "tuanle",
      password: "Letuan12"
    },
    type: "default"
  },
  server: "tuanle.database.windows.net",
  options: {
    database: "SecurityProject",
    encrypt: true
  }
};

const connection = new Connection(config);
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connect to Azure successfully!!");
  }
});
module.exports = connection;
