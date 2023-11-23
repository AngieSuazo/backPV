export const TOKEN_SECRET = process.env.TOKEN_SECRET || 'una_clave_secreta_segura';
import { config } from "dotenv";
config();
export const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT;
export const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET;
export const PAYPAL_API = process.env.PAYPAL_API;
export const PORT = process.env.PORT || 3000;
export const HOST = process.env.HOST || `http://localhost:${PORT}`;
