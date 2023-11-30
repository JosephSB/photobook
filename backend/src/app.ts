import express from "express";
import cors from "cors";
import { boomErrorHandler, errorHandler, logErrors } from "./middlewares/errors.middleware";

const createServer = async () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true })); // use for request x-www-formurlencode

  // use http routes
  app.get('/', (req, res) => {
    res.send('Welcome to the PhotoBook api!');
  });

  app.use(logErrors);
  app.use(boomErrorHandler);
  app.use(errorHandler);
  return app
}


export default createServer
