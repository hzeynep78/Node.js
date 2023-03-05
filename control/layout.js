const express= require("express");
const app = express();
const layout= express.Router();


app.set("view engine", "pug");
app.set("views","./views");
layout.get("/layout.pug", (req,res)=>{
    res.render("layout");
    }
    )

    module.exports = layout;