import { Router } from "express";
import {
  getTurnos,
  getTurno,
  createTurno,
  updateTurno,
  deleteTurno,
} from "../controllers/turnos.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { createSchema } from "../schemas/turno.schema.js";

const router = Router();

router.get("/turnos", authRequired, getTurnos);
router.get("/turnos/:id", authRequired, getTurno);
router.post("/turnos", [authRequired, validateSchema(createSchema)], createTurno);
router.delete("/turnos/:id", authRequired, deleteTurno);
router.put("/turnos/:id", authRequired, updateTurno);

export default router;
