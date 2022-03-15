import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.NODE_API_KEY;
const BACKEND_URL = `https://www.thesportsdb.com/api/v1/json/${API_KEY}`;

export const PORT = process.env.NODE_PORT || 8080;
export const myApp = axios.create({baseURL: BACKEND_URL});