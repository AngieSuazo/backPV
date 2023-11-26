import { Router } from "express";
import {
  getCaja,
  getCajas,
  createCaja,
  updateCaja,
  deleteCajas,
} from "../controllers/caja.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { createSchema } from "../schemas/caja.schema.js";


const router = Router();

router.get("/caja", authRequired, getCaja);
router.get("/cajas/:id", authRequired, getCajas);
router.post("/caja", [authRequired, validateSchema(createSchema)], createCaja);
router.delete("/cajas/:id", authRequired, deleteCajas);
router.put("/caja/:id", authRequired, updateCaja);

export default router;
