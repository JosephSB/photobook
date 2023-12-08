import express from "express";

import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

import { uploadPhotoForPost } from "../controller/storage.controller";
import { AuthMiddleware } from "../middlewares/auth.middlware";
const storageRouter = express.Router();

storageRouter.get("/", (req, res) => {
  res.send("SERVICE STORAGE FILES");
});

storageRouter.post("/uploadPhotoForPost",[upload.single("file"), AuthMiddleware.validateJwt], uploadPhotoForPost);

export default storageRouter
