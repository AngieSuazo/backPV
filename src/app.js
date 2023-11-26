import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import turnoRoutes from "./routes/turnos.routes.js";

import reservaRoutes from "./routes/reserva.routes.js";


import reservaRoutes from "./routes/reserva.routes.js";
import boteRoutes from "./routes/bote.routes.js";
import grupoRoutes from "./routes/grupo.routes.js";


import circuitoRoutes from "./routes/circuitos.routes.js";


import cajaRoutes from "./routes/caja.routes.js";

import guiaRoutes from "./routes/guia.routes.js";

import cors from "cors";

const app = express();
var corsOptions = {
  origin: "http://localhost:4200",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: true,
  optionsSuccessStatus: 204,
  credentials: true,
};

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
//app.options("*", cors());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", turnoRoutes);
app.use("/api", reservaRoutes);

app.use('/api', reservaRoutes);
app.use('/api', boteRoutes);
app.use('/api', grupoRoutes);
app.use("/api", circuitoRoutes);

app.use("/api", cajaRoutes);

app.use("/api", guiaRoutes);

export default app;
