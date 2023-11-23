import { Router } from "express";
import {
  login,
  register,
  logout,
  profile,
  getClientes,
  getCliente,
  updateCliente,
  deleteCliente,
  getClientes,
  deletecliente
} from "../controllers/cliente.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { registerSchema, loginSchema } from "../schemas/cliente.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/profile", authRequired, profile);
//probablemente se necesite un nuevo controller para estos metodos
router.get("/getclientes", authRequired, getClientes);
router.get("/getcliente/:id", authRequired, getCliente);
router.put("/putcliente/:id", authRequired, updateCliente);
router.delete("/delcliente/:id", authRequired, deleteCliente);

export default router;