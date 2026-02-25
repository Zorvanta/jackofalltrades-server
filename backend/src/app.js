//builds application while server.js runs the application
//configure express, add middleware, register routes, define behavior etc.
//does not start server
import express from "express";
import usersRouter from "./routes/user.routes.js";
import skillsRouter from "./routes/skills.routes.js";
import userskillsRouter from "./routes/user_skills.routes.js";
const app = express();
app.use(express.json());
app.set("json spaces", 2);

app.get("/", (req,res) => res.json({ok: true}));

app.use("/users", usersRouter);
app.use("/skills", skillsRouter);
app.use("/userskills", userskillsRouter);

export default app;


