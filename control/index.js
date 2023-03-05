const express= require("express");
const app = express();
const index= express.Router();


app.set("view engine", "pug");
app.set("views","./views");
index.get("/index.pug", (req,res)=>{
    res.render("index");
    }
    )

    module.exports = index;