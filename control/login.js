const express = require("express");
const app = express();
const login = express.Router();


app.set("view engine", "pug");
app.set("views", "./views");
login.get("/", (req, res) => {
    res.render("login");
}
)

module.exports = login;