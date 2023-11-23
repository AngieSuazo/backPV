import { Router } from "express";
import {
  getBotes,
  getBote,
  createBote,
  updateBote,
} from "../controllers/bote.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { createSchema } from "../schemas/bote.schema.js";

const router = Router();

router.get("/botes", authRequired, getBotes);
router.get("/botes/:id", authRequired, getBote);
router.post("/botes", [authRequired, validateSchema(createSchema)], createBote);
router.put("/botes/:id", authRequired, updateBote);

export default router;
