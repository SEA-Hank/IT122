//import { getAll, getItem } from "./data.js";
import express from "express";
import exphbs from "express-handlebars";
import { keyboards } from "./models/keyboards.js";
const app = express();
const port = 3000;
app.use(express.static("public"));
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  keyboards
    .find()
    .lean()
    .then((data) => {
      console.log(data);
      res.render("home", { title: "IT 122 home page", items: data });
    })
    .catch((err) => next(err));
});
app.get("/detail/:id([0-9]+)", (req, res) => {
  console.log(req.query);
  keyboards
    .findOne({ id: req.params.id })
    .lean()
    .then((keyboard) => {
      res.render("detail", {
        title: req.query.title || "IT 122 detail page",
        item: keyboard,
      });
    })
    .catch((err) => next(err));
});
app.get("/delete/:id([0-9]+)", (req, res) => {
  keyboards.findOneAndDelete({ id: req.params.id }, (err, result) => {
    if (err) {
      next(err);
      return;
    }
    keyboards.countDocuments({}, (err, count) => {
      if (err) {
        next(err);
        return;
      }
      res.render("delete", {
        title: req.query.title || "IT 122 DELETE PAGE",
        item: result ? result.toObject() : null,
        count: count,
      });
    });
  });
});

app.get("/about", (req, res) => {
  res.set("Content-Type", "text/plain");
  res.send(`This is IT122 Hank's about page\n\rI love coding`);
});

app.get((req, res) => {
  res.sendStatus(404);
});

app.listen(port);
