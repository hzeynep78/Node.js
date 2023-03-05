const express= require("express");
const app = express();

app.use("/", require("./control/login"));
app.use("/", require("./control/index"));
app.use("/", require("./control/layout"));

app.set("view engine", "pug");
app.set("views","./views");
app.listen(8000, ()=>{
    console.log("Merhaba Dünya");
});








