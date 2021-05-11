import express from "express";
import { keyboards } from "./models/keyboards.js";
const apiRoute = express.Router();

apiRoute.get("/getAllItems", (req, res) => {
  keyboards
    .find()
    .lean()
    .then((data) => {
      res.json({ success: true, data: data });
    })
    .catch((err) => {
      res.json({ success: false, error: err.message, method: "getAllItems" });
    });
});

apiRoute.get("/getItemById/:id([0-9]+)", (req, res) => {
  keyboards
    .findOne({ id: req.params.id })
    .lean()
    .then((keyboard) => {
      if (keyboard) {
        res.json({ success: true, data: keyboard });
        return;
      }
      res.json({ success: false, error: "item not found" });
    })
    .catch((err) => {
      res.json({ success: false, error: err.message, method: "getItemById" });
    });
});

apiRoute.get("/delete/:id([0-9]+)", (req, res) => {
  keyboards.deleteOne({ id: req.params.id }, (err, result) => {
    if (err) {
      res.json({ success: false, error: err.message, method: "delete" });
      return;
    }
    if (result.deletedCount == 0) {
      res.json({ success: false, error: "item not found" });
      return;
    }
    res.json({ success: true });
  });
});

apiRoute.post("/update/:id([0-9]+)", (req, res) => {
  keyboards.updateOne({ id: req.params.id }, req.body, (err, result) => {
    if (err) {
      res.json({ success: false, error: err.message, method: "update" });
      return;
    }
    if (result.nModified == 0) {
      res.json({
        success: false,
        error: "item not found or data without changes",
      });
      return;
    }
    res.json({ success: true });
  });
});

apiRoute.post("/add", (req, res) => {
  keyboards.create(req.body, (err, result) => {
    if (err) {
      res.json({ success: false, error: err.message, method: "add" });
      return;
    }
    if (result) {
      res.json({ success: true });
      return;
    }
  });
});

export { apiRoute };
