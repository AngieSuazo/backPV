import { Router } from "express";
import {
  getTurnos,
  getTurno,
  getVisitas,
  getVisita,

} from "../controllers/visitas.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { createSchema } from "../schemas/turno.schema.js";

const router = Router();

router.get("/visitas", authRequired, getVisitas);
router.get("/visitas/:id", authRequired, getVisita);
router.post("/visitas", [authRequired, validateSchema(createSchema)], createVisita);

export default router;