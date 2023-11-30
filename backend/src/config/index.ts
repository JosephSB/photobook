import 'dotenv/config';

export default {
  PORT: process.env.PORT ? Number(process.env.PORT) : 5000,
  ENV: process.env.ENV ? process.env.ENV : "dev",
}
