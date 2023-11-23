import { Router } from "express";
import {
  getCircuitos,
  getCircuito,
  createCircuito,
  updateCircuito,
  deleteCircuito,
} from "../controllers/circuitos.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { circuitoSchema } from "../schemas/circuito.schema.js";

const router = Router();

router.get("/circuitos", authRequired, getCircuitos);
router.get("/circuitos/:id", authRequired, getCircuito);
router.post("/circuitos", [authRequired, validateSchema(circuitoSchema)], createCircuito);
router.delete("/circuitos/:id", authRequired, deleteCircuito);
router.put("/circuitos/:id", authRequired, updateCircuito);

export default router;