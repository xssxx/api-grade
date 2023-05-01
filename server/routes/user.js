import express from "express";

import { getToken, getGrade } from "../controller/userController.js";

const router = express.Router();

router.post("/login", getToken);

router.post("/grade", getGrade);

export default router;
