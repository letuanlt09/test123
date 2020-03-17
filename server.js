const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require("./routes/api");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
//HTTP request logger
app.use(morgan("tiny"));
app.use("/", routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
