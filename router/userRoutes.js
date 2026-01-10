import express from "express"
import { forgotPassword, getUser, getUserForPortfolio, login, logout, register, updatePassword, updateProfile } from "../controller/userController.js"
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router()

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/me", isAuthenticated, getUser);
router.put("/update/me", isAuthenticated, updateProfile);
router.put("/update/password", isAuthenticated, updatePassword);
router.get("/portfolio/me", getUserForPortfolio);
router.post("/password/forgot", forgotPassword);


export default router;

