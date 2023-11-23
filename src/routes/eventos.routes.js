import { Router } from "express";
import {
    createEvento,
    getEvento,
  } from "../controllers/eventos.controller.js";

import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { createSchema } from "../schemas/evento.schema.js";

const router = Router();

router.get("/eventos/:id", authRequired, getEvento);
router.post("/eventos", [authRequired, validateSchema(createSchema)], createEvento);

export default router;
