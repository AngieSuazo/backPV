import { Router } from "express";
import {
  createReserva,
  getReservas,
  getReserva,
  updateReserva,
  deleteReserva,
} from "../controllers/reserva.controller.js";


const router = Router();

router.post("/reservas", createReserva);
router.get("/reservas", getReservas);
router.get("/reservas/:id", getReserva);
router.put("/reservas/:id", updateReserva);
router.delete("/reservas/:id", deleteReserva);

export default router;
