import express from "express";
import userRoutes from "./routes/userRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";
import { accesslogMiddleware } from "./middlewares/acceslog.js";
import postRouter from "./routes/postRoutes.js";
import cors from "cors";

const host = process.env.HOST ?? "localhost";
const port = Number(process.env.PORT) || 3000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

/**Middlewares */
app.use(accesslogMiddleware);
app.use(express.json());

/**Routes */
app.use(loginRoutes);
app.use(userRoutes);
app.use(postRouter);

//start the server
app.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port}`);
});
