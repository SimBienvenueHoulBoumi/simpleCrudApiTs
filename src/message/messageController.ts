// fichier 2
import express from "express";
import {
  findAllMessage,
  createMessage,
  deleteMessage,
  updateMessage,
} from "./messageService";

let messageRouter = express.Router();

messageRouter.get("/all", async (req, res) => {
  const messages = await findAllMessage();
  res.status(200).send(messages);
});

messageRouter.post("/create", async (req, res) => {
  const content = req.body.content;
  const newMessage = await createMessage({ content });
  res.status(201).send(newMessage);
});

messageRouter.delete("/delete/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const message = await deleteMessage(id);
  res.status(200).send(message);
});

messageRouter.put("/update/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const content = req.body.content;
  const time = new Date();
  await updateMessage(id, content, time);
  res.status(200).send({ message: "message updated" });
});

export default messageRouter;
