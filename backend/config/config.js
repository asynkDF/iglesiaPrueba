import dotenv from 'dotenv';

dotenv.config();

let config = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

export default config;
