import mongoose from "mongoose";
import {
  connectionString,
  onlineConnectionString,
} from "../lib/credentials.js";
const { Schema } = mongoose;

const keyboardsSchema = new Schema(
  {
    id: Number,
    name: String,
    Brand: String,
    ranking: Number,
    comments: Number,
    price: Number,
    GET: String,
  },
  { versionKey: false }
);

mongoose.connect(onlineConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "it122",
});

const keyboards = mongoose.model("keyboards", keyboardsSchema);

export { keyboards };
