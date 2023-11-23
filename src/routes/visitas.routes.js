import { Router } from "express";
import {
  crearVisitaDesdeReserva,
  getVisita,
} from "../controllers/visitas.controller.js";

import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { createSchema } from "../schemas/evento.schema.js";

const router = Router();

router.get("/visitas/:id", authRequired, getVisita);
router.post("/visitas", [authRequired, validateSchema(createSchema)], crearVisitaDesdeReserva);

export default router;
