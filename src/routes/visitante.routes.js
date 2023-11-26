import { Router } from "express";
import {
  getVisitantes,
  getVisitante,
  createVisitante,
  updateVisitante,
  deleteVisitante,
} from "../controllers/visitante.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { createVisitanteSchema } from "../schemas/visitante.schema.js";

const router = Router();

router.get("/visitante", authRequired, getVisitantes);
router.get("/visitante/:id", authRequired, getVisitante);
router.post("/visitante",[authRequired, validateSchema(createVisitanteSchema)], createVisitante);
router.delete("/visitante/:id", authRequired, deleteVisitante);
router.put("/visitante/:id", authRequired, updateVisitante);

export default router;
