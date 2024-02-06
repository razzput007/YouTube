import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from './routes/user.route.js'
const app = express();

app.use(
  cors({
    origin: process.env.CORS_POLICY,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(cookieParser());


app.use('/api/v1/users/',userRouter)

export { app };
