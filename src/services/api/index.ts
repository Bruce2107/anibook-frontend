import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default instance;
