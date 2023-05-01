import express from "express";
import sessions from "express-session";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import useRouter from "./routes/user.js";

dotenv.config({ path: "./config/.env" });

const app = express();
const oneDay = 1000 * 60 * 60 * 24;

// apply middleware

app.use(
  sessions({
    secret: process.env.SECRETKEY,
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

// router

app.use("/api", useRouter);

// server listening

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
