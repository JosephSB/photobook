import express from "express";
import storageRouter from "./storage.router";
const ApiRouter = express.Router();

ApiRouter.use("/storage", storageRouter);

export default ApiRouter
