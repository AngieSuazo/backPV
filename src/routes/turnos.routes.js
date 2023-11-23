import { Router } from "express";
import {
  getTurnos,
  getTurno,
  createTurno,
  updateTurno,
  createExcluder,
  deleteExcluder,
  deleteTurno,
} from "../controllers/turnos.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { createSchema } from "../schemas/turno.schema.js";
import { excluderSchema } from "../schemas/turno.schema.js";

const router = Router();

router.get("/turnos", authRequired, getTurnos);
router.get("/turnos/:id", authRequired, getTurno);
router.post("/turnos", [authRequired, validateSchema(createSchema)], createTurno);
router.delete("/turnos/:id", authRequired, deleteTurno);
router.put("/turnos/:id", authRequired, updateTurno);

router.put("/turnos/ex/create/:id", [authRequired, validateSchema(excluderSchema)], createExcluder);
router.put("/turnos/ex/delete/:id", authRequired, deleteExcluder);

export default router;
