import { Router } from "express";
import {
  registrarGuia,
} from "../controllers/guia.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import {createGuiaSchema } from "../schemas/guia.schema.js";

const router = Router();

router.post("/guia", [authRequired, validateSchema(createGuiaSchema)], registrarGuia);

export default router;
