import express from "express";
import routes from "./src/routes/index.js";
import db from "./src/db.js";

const app = express();

/* app.use(express.json());
app.use(routes.routes);

db.sync(() => console.log(`Banco de dados conectado:${process.env.DB_NAME}`)); */

app.use("/", (req, res) => {
  res.json({ message: "Hello From Express App" });
});

const PORT = 8080;

app.listen(PORT, () => console.log(`Servidor iniciando na porta:${PORT}`));
