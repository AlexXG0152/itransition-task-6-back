import mongoose from "mongoose";
import Message from "./messages.model.js";

Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.messages = Message;

export default db;
