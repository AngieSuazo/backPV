import { Router } from "express";
import {
  registrarGuia,
  getGuia,
  getGuias,
  updateGuia
} from "../controllers/guia.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { createGuiaSchema } from "../schemas/guia.schema.js";

const router = Router();

router.get("/guias", authRequired, getGuias);
router.get("/guias/:id", authRequired, getGuia);
router.put("/guias/:id", authRequired, updateGuia);
router.post("/guias", [authRequired, validateSchema(createGuiaSchema)], registrarGuia);


export default router;
