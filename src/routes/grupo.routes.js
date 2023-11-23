import { Router } from "express";
import {
  getGrupos,
  getGrupo,
  createGrupo,
  updateGrupo
} from "../controllers/grupo.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { createSchema } from "../schemas/grupo.schema.js";

const router = Router();

router.get("/grupos", authRequired, getGrupos);
router.get("/grupo/:id", authRequired, getGrupo);
router.post("/grupos",[authRequired, validateSchema(createSchema)], createGrupo);
router.put("/grupos/:id", authRequired, updateGrupo);

export default router;
