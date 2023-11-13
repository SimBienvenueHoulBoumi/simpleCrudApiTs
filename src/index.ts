import express from "express";

import "dotenv/config";

import messageRouter from "./message/messageController";

let port = process.env.PORT;

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/message", messageRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
