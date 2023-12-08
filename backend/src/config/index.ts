import 'dotenv/config';
import path from 'path';

export default {
  PORT: process.env.PORT ? Number(process.env.PORT) : 5000,
  ENV: process.env.ENV ? process.env.ENV : "dev",
  JWT_SEED: process.env.JWT_SEED ? process.env.JWT_SEED : "SEED",
  JWT_TOKEN_DURATION: process.env.JWT_TOKEN_DURATION ? process.env.JWT_TOKEN_DURATION : "24h",

  POSTGRESS_DB: {
    HOST: process.env.POSTGRESS_DB_HOST ? process.env.POSTGRESS_DB_HOST : "",
    PORT: process.env.POSTGRESS_DB_PORT ? Number(process.env.POSTGRESS_DB_PORT) : 5432,
    NAME: process.env.POSTGRESS_DB_NAME ? process.env.POSTGRESS_DB_NAME : "",
    USER: process.env.POSTGRESS_DB_USER ? process.env.POSTGRESS_DB_USER : "",
    PASSWORD: process.env.POSTGRESS_DB_PASSWORD ? process.env.POSTGRESS_DB_PASSWORD : ""
  },

  GCP: {
    PROJECT_ID: process.env.GCP_PROJECT_ID ? process.env.GCP_PROJECT_ID : "",
    BUCKET_NAME: process.env.GCP_BUCKET_NAME ? process.env.GCP_BUCKET_NAME : "",
    ACCOUNT_CREDENTIALS: path.join(__dirname, "./qwiklabs-gcp-02-54464aa3f0ee-c4a213a0b150.json")
  }

}
