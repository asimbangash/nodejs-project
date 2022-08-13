const express = require ("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");

const port = process.env.PORT || 4000;
const public_static = path.join(__dirname, "../public");
const template_static = path.join(__dirname, "../templates/views");
const partial_static = path.join(__dirname, "../templates/partials");


app.use(express.static(public_static));
app.set("view engine", "hbs");
app.set("views", template_static);
hbs.registerPartials(partial_static);

app.get("/", (req, res)=>{
    res.render("index");
})

app.listen(port, ()=>{
    console.log(`sever run at the port number ${port}`);
})