import mongoose from "mongoose";
import { connectionString } from "../lib/credentials.js";
const { Schema } = mongoose;

const keyboardsSchema = new Schema({
  id: Number,
  name: String,
  Brand: String,
  ranking: Number,
  comments: Number,
  price: Number,
  GET: String,
});

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "it122",
});

const keyboards = mongoose.model("keyboards", keyboardsSchema);

export { keyboards };

// keyboards.find({}, function (a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// });
