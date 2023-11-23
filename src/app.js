import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import turnoRoutes from "./routes/turnos.routes.js";
<<<<<<< HEAD
import circuitoRoutes from "./routes/circuitos.routes.js";
=======

import cajaRoutes from "./routes/caja.routes.js";

import guiaRoutes from "./routes/guia.routes.js";
<<<<<<< HEAD
import eventoRoutes from "./routes/eventos.routes.js";
=======

>>>>>>> 72da49c4e3d33e0dc35e02fab1a59e6e344793a8
>>>>>>> fa71e81da77423ccee4199fdf86f7731f5da294d
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
app.use("/api", circuitoRoutes);

app.use("/api", cajaRoutes);

app.use("/api", guiaRoutes);
app.use("/api", eventoRoutes);


export default app;
