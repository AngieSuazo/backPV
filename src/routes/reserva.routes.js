import { Router } from "express";
import {
  getReservas,
  getReserva,
  createReserva,
  updateReserva,
  deleteReserva,
} from "../controllers/reserva.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { createSchema } from "../schemas/reserva.schema.js";

const router = Router();

router.get("/reservas", authRequired, getReservas);
router.get("/reservas/:id", authRequired, getReserva);
router.post("/reservas", [authRequired, validateSchema(createSchema)], createReserva);
router.delete("/reservas/:id", authRequired, deleteReserva);
router.put("/reservas/:id", authRequired, updateReserva);

export default router;
