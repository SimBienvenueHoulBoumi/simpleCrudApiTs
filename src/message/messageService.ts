// fichier 1

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const findAllMessage = async () => {
  try {
    const messages = await prisma.message.findMany();
    return messages;
  } catch (e) {
    console.error(e);
    return [];
  }
};

const createMessage = async (message: any) => {
  try {
    const newMessage = await prisma.message.create({
      data: {
        content: message.content,
      },
    });
    return newMessage;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const getOneMessage = async (id: number) => {
  try {
    const message = await prisma.message.findUnique({
      where: {
        id: id,
      },
    });
    return message;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const deleteMessage = async (id: number) => {
  try {
    const message = await prisma.message.delete({
      where: {
        id: id,
      },
    });
    return message;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const updateMessage = async (id: number, message: any, time: any) => {
  try {
    const messageUpdated = await prisma.message.update({
      where: {
        id: id,
      },
      data: {
        content: message,
        updatedAt: time,
      },
    });
    return messageUpdated;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export {
  findAllMessage,
  createMessage,
  deleteMessage,
  updateMessage,
  getOneMessage,
};
