import { getAll, getItem } from "./ data.js";
import express from "express";
import exphbs from "express-handlebars";
const app = express();
const port = 3000;
app.use(express.static("public"));
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("home", { title: "IT 122 home page", items: getAll() });
});
app.get("/detail/:id([0-9]+)", function (req, res) {
  console.log(req.query);
  let item = getItem(req.params.id);
  res.render("detail", {
    title: req.query.title || "IT 122 detail page",
    item: item,
  });
});
app.get("/about", function (req, res) {
  res.set("Content-Type", "text/plain");
  res.send(`This is IT122 Hank's about page\n\rI love coding`);
});
app.get(function (req, res) {
  res.sendStatus(404);
});
app.listen(port);
